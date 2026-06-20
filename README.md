# Kanwar Devrath — Full-stack portfolio

A responsive MERN portfolio with a premium dark interface, glassmorphism, Framer Motion animations, and a database-backed contact form.

## Stack

- React 19, Vite, Tailwind CSS 4, Framer Motion
- Node.js, Express, MongoDB, Mongoose
- Axios, Nodemailer, Lucide React

## Project structure

```text
.
├── portfolio/          # React + Vite frontend
│   ├── public/
│   └── src/
│       ├── components/portfolio/
│       └── data/
├── server/             # Express API
│   └── src/
│       ├── config/
│       ├── controllers/
│       ├── models/
│       ├── routes/
│       └── services/
└── package.json        # Root development scripts
```

## Local setup

Requirements: Node.js 20+, npm, and a local or hosted MongoDB database.

1. Install dependencies:

   ```bash
   npm install
   npm run install:all
   ```

2. Create environment files:

   ```bash
   cp portfolio/.env.example portfolio/.env
   cp server/.env.example server/.env
   ```

3. Set `MONGODB_URI` in `server/.env`. SMTP values are optional; messages are always saved to MongoDB, and email notifications are sent only when SMTP is configured.

4. Start frontend and backend:

   ```bash
   npm run dev
   ```

The frontend runs at `http://localhost:5173` and the API at `http://localhost:5001`.

## API

`POST /api/contact`

```json
{
  "name": "Ada Lovelace",
  "email": "ada@example.com",
  "subject": "Project enquiry",
  "message": "I would like to discuss a new web product."
}
```

All fields are required. The API validates lengths and email format, stores valid messages in MongoDB, rate-limits submissions, and returns JSON success/error responses.

## Production

```bash
npm run lint
npm run build
npm start
```

Set `VITE_API_URL` to the deployed API origin and `CLIENT_URL` to the deployed frontend origin. Multiple allowed frontend origins can be provided as a comma-separated list.
