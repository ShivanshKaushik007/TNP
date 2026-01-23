# TPC Next.js Migration

This is the Next.js migration of the TPC (Training and Placement Cell) website for IET Lucknow.

## Getting Started

### 1. Install Dependencies

```bash
cd tpc-new
npm install
```

### 2. Copy Static Assets

Before running the project, you need to copy the static assets:

```bash
# From the root TPC directory, copy:
# - images/ folder to tpc-new/public/images/
# - files/ folder to tpc-new/public/files/
# - CNAME file to tpc-new/public/CNAME
```

Or manually:
- Copy `d:\TNP Website\TPC\images\` to `d:\TNP Website\TPC\tpc-new\public\images\`
- Copy `d:\TNP Website\TPC\files\` to `d:\TNP Website\TPC\tpc-new\public\files\`
- Copy `d:\TNP Website\TPC\CNAME` to `d:\TNP Website\TPC\tpc-new\public\CNAME`

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### 4. Build for Production

```bash
npm run build
```

This will create a static export in the `out/` folder.

### 5. Deploy

The site is configured for static export. You can deploy the `out/` folder to any static hosting service (GitHub Pages, Vercel, Netlify, etc.).

## Project Structure

```
tpc-new/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with Header
│   ├── page.tsx           # Homepage
│   ├── downloads/         # Downloads page
│   ├── faq/              # FAQ page
│   ├── tpc/              # TPC pages (about, contact)
│   ├── insights/         # Insights pages
│   └── recruiters/       # Recruiter pages
├── components/            # Reusable React components
│   └── Header.tsx        # Navigation header
├── public/               # Static files
│   ├── images/          # Images
│   ├── files/           # PDF and document files
│   └── CNAME            # Custom domain file
├── styles/              
│   └── globals.css      # Global styles with Tailwind
├── tailwind.config.ts   # Tailwind configuration
├── next.config.js       # Next.js configuration
└── package.json         # Dependencies

```

## Key Features

- ✅ **Static Export**: Configured for static HTML export
- ✅ **Tailwind CSS**: All styling preserved using Tailwind
- ✅ **Responsive Design**: Mobile-first approach maintained
- ✅ **SEO Optimized**: Metadata and semantic HTML
- ✅ **TypeScript**: Type-safe development
- ✅ **Fast Performance**: Optimized builds with Next.js

## Migration Notes

### Changes from Original

1. **File Extension**: `.html` → `.tsx`
2. **Links**: `href="page.html"` → `href="/page"`
3. **Images**: All in `/public/images/` (access via `/images/...`)
4. **Components**: Header extracted to reusable component
5. **Client-Side JS**: Moved to `useEffect` hooks with `'use client'` directive

### URL Mapping

| Original | Next.js |
|----------|---------|
| `index.html` | `/` |
| `downloads.html` | `/downloads` |
| `faq.html` | `/faq` |
| `tpc/aboutus.html` | `/tpc/aboutus` |
| `tpc/contactus.html` | `/tpc/contactus` |
| `insights/aboutiet.html` | `/insights/aboutiet` |
| `recruiters/invitation.html` | `/recruiters/invitation` |

## Next Steps

1. **Create remaining pages**: Copy HTML content from other pages and convert to Next.js pages
2. **Add images**: Copy all images to public/images/
3. **Test all links**: Ensure navigation works across all pages
4. **Add forms**: Implement contact forms with proper handling
5. **Deploy**: Build and deploy to your hosting provider

## Development Tips

- Use `Link` component from 'next/link' for internal navigation
- Keep client-side JavaScript in components with `'use client'` directive
- Static assets go in `/public/` and are accessed without the public prefix
- Each page is a `page.tsx` file in its route folder

## Questions or Issues?

Check the Next.js documentation: https://nextjs.org/docs
