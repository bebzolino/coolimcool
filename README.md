# Customer404

Discord outreach dashboard with a Python bot worker and a Next.js control panel.

## Railway

This repo is intended to run as two Railway services from the same repository.

### Dashboard service

- Root directory: repository root
- Builder: Dockerfile
- Dockerfile: `Dockerfile.dashboard`
- Public domain: enabled
- Required variable: `DATABASE_URL`

The root `railway.toml` is configured for the dashboard service.

### Bot service

- Root directory: `packages/bot`
- Builder: Dockerfile
- Dockerfile: `Dockerfile`
- Public domain: not required
- Required variable: `DATABASE_URL`

The bot service uses `packages/bot/railway.toml`.

## Database

Use PostgreSQL. Both services must point at the same database.

The bot creates the required tables on startup if the database is empty:

- `SystemConfig`
- `Account`
- `Member`
- `Conversation`
- `Notification`
- `Log`
- `BlacklistEntry`

## Local Development

Install dependencies:

```bash
npm install
```

Generate the Prisma client:

```bash
npm run db:generate
```

Run the dashboard:

```bash
npm run dev:dashboard
```

Run the bot:

```bash
npm run dev:bot
```

## Notes

- Runtime secrets belong in environment variables, not in files.
- Do not commit `.env`, tokens, proxies, local logs, or database dumps.
- The dashboard blocks links in the welcome message in the UI, API, and bot runtime.
