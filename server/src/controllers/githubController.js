import { getGitHubProfile } from "../services/githubService.js";

export async function githubProfile(_req, res, next) {
  try {
    const data = await getGitHubProfile();
    res.set("Cache-Control", "public, max-age=300, stale-while-revalidate=600");
    return res.json({ success: true, data });
  } catch (error) {
    return next(error);
  }
}
