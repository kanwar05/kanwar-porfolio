const cache = { data: null, expiresAt: 0 };

function headers() {
  return {
    Accept: "application/vnd.github+json",
    "User-Agent": "kanwar-portfolio",
    "X-GitHub-Api-Version": "2022-11-28",
    ...(process.env.GITHUB_TOKEN
      ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
      : {}),
  };
}

async function githubFetch(path) {
  const response = await fetch(`https://api.github.com${path}`, { headers: headers() });
  if (!response.ok) {
    throw new Error(`GitHub API returned ${response.status}`);
  }
  return response.json();
}

function buildActivity(events) {
  const days = Array.from({ length: 30 }, (_, index) => {
    const date = new Date();
    date.setUTCDate(date.getUTCDate() - (29 - index));
    return { date: date.toISOString().slice(0, 10), count: 0 };
  });
  const byDate = new Map(days.map((day) => [day.date, day]));

  events.forEach((event) => {
    const day = byDate.get(event.created_at?.slice(0, 10));
    if (day) day.count += event.type === "PushEvent" ? event.payload?.size || 1 : 1;
  });

  return days;
}

export async function getGitHubProfile() {
  if (cache.data && cache.expiresAt > Date.now()) return cache.data;

  const username = process.env.GITHUB_USERNAME || "kanwar05";
  const [profile, repos, events] = await Promise.all([
    githubFetch(`/users/${username}`),
    githubFetch(`/users/${username}/repos?sort=updated&per_page=100`),
    githubFetch(`/users/${username}/events/public?per_page=100`),
  ]);

  const selectedNames = (process.env.GITHUB_SELECTED_REPOS || "")
    .split(",")
    .map((name) => name.trim().toLowerCase())
    .filter(Boolean);
  const selected = (selectedNames.length
    ? repos.filter((repo) => selectedNames.includes(repo.name.toLowerCase()))
    : repos.filter((repo) => !repo.fork).slice(0, 4)
  ).slice(0, 6);

  const languages = {};
  await Promise.allSettled(
    selected.map(async (repo) => {
      const repoLanguages = await githubFetch(`/repos/${username}/${repo.name}/languages`);
      Object.entries(repoLanguages).forEach(([language, bytes]) => {
        languages[language] = (languages[language] || 0) + bytes;
      });
    }),
  );

  const totalLanguageBytes = Object.values(languages).reduce((sum, value) => sum + value, 0) || 1;
  const languageBreakdown = Object.entries(languages)
    .map(([name, bytes]) => ({ name, percentage: Math.round((bytes / totalLanguageBytes) * 100) }))
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, 6);

  const recentCommits = events
    .filter((event) => event.type === "PushEvent")
    .flatMap((event) =>
      (event.payload?.commits || []).map((commit) => ({
        id: commit.sha,
        message: commit.message,
        repository: event.repo.name,
        url: `https://github.com/${event.repo.name}/commit/${commit.sha}`,
        date: event.created_at,
      })),
    )
    .slice(0, 6);

  const data = {
    profile: {
      username: profile.login,
      name: profile.name,
      avatar: profile.avatar_url,
      url: profile.html_url,
      followers: profile.followers,
      publicRepos: profile.public_repos,
    },
    repositories: selected.map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      homepage: repo.homepage,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      language: repo.language,
      updatedAt: repo.updated_at,
    })),
    languages: languageBreakdown,
    totalStars: repos.reduce((sum, repo) => sum + repo.stargazers_count, 0),
    recentCommits,
    activity: buildActivity(events),
    updatedAt: new Date().toISOString(),
  };

  cache.data = data;
  cache.expiresAt =
    Date.now() + Math.max(Number(process.env.GITHUB_CACHE_MINUTES) || 10, 1) * 60_000;
  return data;
}

export function clearGitHubCache() {
  cache.data = null;
  cache.expiresAt = 0;
}
