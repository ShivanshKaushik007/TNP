# TPC Website (Next.js)

Next.js (App Router) implementation of the Training and Placement Cell website for IET Lucknow.

## Tech Stack

- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS
- GSAP + Motion for animation
- Nodemailer for contact email API

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm

### Install

```bash
npm install
```

### Run Dev Server

```bash
npm run dev
```

Open http://localhost:3000.

### Build

```bash
npm run build
```

### Start (Production)

```bash
npm run start
```

## Project Structure

```
app/                      # App Router pages and API routes
	api/                    # Server routes (e.g. contact email)
	downloads/              # Downloads page
	gallery/                # Gallery page and components
	insights/               # Insights pages
	recruiters/             # Recruiter-focused pages
	tpc/                    # About and contact pages
components/               # Shared UI components
components/ui/            # Reusable UI building blocks
lib/                      # Utilities
public/                   # Static assets (images, files, videos)
styles/                   # Global styles (Tailwind)
```

## Environment Variables

If you use the corporate contact API route, configure email credentials. Create a .env.local file with:

```bash
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-pass
SMTP_SECURE=false
SMTP_FROM=sender@example.com
CONTACT_RECEIVER_EMAIL=recipient@example.com
```

These names match the corporate contact API route.

## Scripts

- npm run dev: Start dev server
- npm run build: Build for production
- npm run start: Start production server
- npm run lint: Run ESLint

## Notes

- Next.js image optimization is disabled (unoptimized) for static hosting compatibility.
- Public assets are served from public/ (images, files, videos, CNAME).


