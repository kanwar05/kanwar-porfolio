# Kanwar Devrath — Full-stack portfolio

A production-oriented MERN portfolio with a live GitHub project gallery, GitHub activity, a database-backed contact workflow, and a protected message administration dashboard.

## Features

- Responsive light/dark SaaS-style interface with Framer Motion
- Automatically synchronized public GitHub repository gallery with custom project artwork
- Contact form with MongoDB persistence, validation, email notification, and rate limiting
- JWT-protected admin inbox with search, filters, pagination, statuses, deletion, and statistics
- Cached GitHub repositories, languages, stars, commits, and 30-day activity
- Dynamic SEO metadata, JSON-LD Person schema, sitemap, robots rules, and custom 404 page
- Frontend and backend test suites with automated GitHub Actions quality checks

## Stack

- Frontend: React 19, Vite, React Router, Tailwind CSS 4, Framer Motion, Axios
- Backend: Node.js, Express, MongoDB, Mongoose, Zod, JWT, bcrypt, Nodemailer
- Testing: Vitest, React Testing Library, Supertest, mongodb-memory-server

## Structure

```text
.
├── .github/workflows/ci.yml
├── portfolio/
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── admin/
│       │   ├── portfolio/
│       │   └── routing/
│       ├── data/
│       ├── hooks/
│       ├── lib/
│       ├── pages/
│       └── test/
├── server/
│   ├── scripts/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── utils/
│   └── tests/
└── scripts/check-secrets.sh
```

## Local setup

Requirements: Node.js 20+, npm, and MongoDB.

```bash
npm install
npm run install:all
cp portfolio/.env.example portfolio/.env
cp server/.env.example server/.env
```

Configure `MONGODB_URI`, `JWT_SECRET`, `ADMIN_EMAIL`, and `ADMIN_PASSWORD_HASH` in `server/.env`.

Generate an administrator password hash:

```bash
npm run hash-password --prefix server -- "a-long-private-password"
```

Copy the generated hash into `ADMIN_PASSWORD_HASH`. Do not store the plain password in any tracked file.

Start both applications:

```bash
npm run dev
```

- Frontend: `http://localhost:5173`
- API: `http://localhost:5001`
- Admin: `http://localhost:5173/admin/login`

## Environment configuration

Frontend:

- `VITE_API_URL`: deployed API origin
- `VITE_SITE_URL`: canonical public site origin

Backend:

- `MONGODB_URI`: MongoDB connection URI
- `CLIENT_URL`: comma-separated allowed frontend origins
- `JWT_SECRET`, `JWT_EXPIRES_IN`: admin session signing
- `ADMIN_EMAIL`, `ADMIN_PASSWORD_HASH`: administrator credentials
- `GITHUB_USERNAME`, `GITHUB_TOKEN`: GitHub API access
- `GITHUB_SELECTED_REPOS`: optional comma-separated repository names
- `SMTP_*`, `MAIL_*`: optional contact email notifications

## API

Public:

- `GET /api/health`
- `POST /api/contact`
- `GET /api/github/profile`

Admin:

- `POST /api/admin/login`
- `GET /api/admin/messages`
- `GET /api/admin/messages/stats`
- `PATCH /api/admin/messages/:id/status`
- `DELETE /api/admin/messages/:id`

Protected requests require `Authorization: Bearer <token>`.

Message query parameters:

```text
?search=project&status=new&page=1&limit=10
```

Supported statuses: `new`, `read`, `replied`, and `archived`.

## Quality checks

```bash
npm run security:scan
npm run lint
npm test
npm run build
```

The CI workflow runs the same checks on pushes and pull requests.

## Deployment notes

- Configure SPA fallback routing. A Netlify `_redirects` file is included.
- Set `VITE_SITE_URL` and update `portfolio/public/robots.txt` and `sitemap.xml` if the deployment domain differs from the GitHub Pages URL.
- Never commit `.env`, API tokens, private keys, recovery codes, or service-account files.
- Rotate any credential that has ever been committed, even after removing it from Git history.

## Security history cleanup

The repository previously tracked `portfolio/.env` and a GitHub recovery-code file. Both paths must be removed from all Git history and the rewritten `main` branch force-pushed:

```bash
git push --force-with-lease origin main
```

Anyone with an older clone should re-clone after the history rewrite. GitHub recovery codes exposed in a previous commit must be regenerated in GitHub account settings.
