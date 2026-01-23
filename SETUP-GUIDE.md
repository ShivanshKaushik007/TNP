# Quick Setup Guide for TPC Next.js

## What's Been Done ✅

1. ✅ Created Next.js project structure in `tpc-new/`
2. ✅ Configured Tailwind CSS with your brand colors
3. ✅ Created reusable Header component
4. ✅ Set up global styles with all animations
5. ✅ Created root layout with Poppins font
6. ✅ Created homepage starter with hero section
7. ✅ Copied all static assets (images, files, CNAME)

## Next Steps to Complete Migration 🚀

### 1. Install Dependencies (REQUIRED)

Open terminal in `tpc-new` folder and run:

```bash
cd tpc-new
npm install
```

### 2. Complete the Homepage

The homepage (`app/page.tsx`) currently has only the hero section. You need to add the remaining sections:

**To add sections:**
1. Open `d:\TNP Website\TPC\index.html`
2. Copy each section (About, Stats, Recruiters, Infrastructure, etc.)
3. Paste into `app/page.tsx` after the hero section
4. Make these conversions:
   - `class="..."` → `className="..."`
   - `stroke-width` → `strokeWidth`
   - `stroke-linecap` → `strokeLinecap`
   - `stroke-linejoin` → `strokeLinejoin`
   - `for="..."` → `htmlFor="..."`
   - `'` in text → `&apos;`

### 3. Create Other Pages

Create pages for each route by creating folders and `page.tsx` files:

**Example structure:**
```
app/
├── downloads/
│   └── page.tsx          (copy from downloads.html)
├── faq/
│   └── page.tsx          (copy from faq.html)
├── tpc/
│   ├── aboutus/
│   │   └── page.tsx      (copy from tpc/aboutus.html)
│   └── contactus/
│       └── page.tsx      (copy from tpc/contactus.html)
├── insights/
│   ├── aboutiet/
│   │   └── page.tsx
│   ├── message/
│   │   └── page.tsx
│   └── recruiters/
│       └── page.tsx
└── recruiters/
    ├── invitation/
    │   └── page.tsx
    ├── procedure/
    │   └── page.tsx
    ├── ContactForm/
    │   └── page.tsx
    └── demographic/
        └── page.tsx
```

**Template for each page:**
```tsx
export default function PageName() {
  return (
    <main>
      {/* Copy HTML content here and convert to JSX */}
    </main>
  );
}
```

### 4. Run Development Server

```bash
npm run dev
```

Visit: http://localhost:3000

### 5. Build for Production

```bash
npm run build
```

The static site will be in the `out/` folder.

### 6. Deploy

Upload the `out/` folder to your hosting provider or use:

```bash
# For GitHub Pages or similar
npm run build
# Then upload the 'out' folder

# For Vercel (recommended)
npm install -g vercel
vercel
```

## Common Conversions Reference

| HTML | JSX (React) |
|------|-------------|
| `class="..."` | `className="..."` |
| `for="..."` | `htmlFor="..."` |
| `stroke-width` | `strokeWidth` |
| `stroke-linecap` | `strokeLinecap` |
| `stroke-linejoin` | `strokeLinejoin` |
| `fill-rule` | `fillRule` |
| `clip-rule` | `clipRule` |
| `<br>` | `<br />` |
| `<img>` | `<img />` |
| `onclick="..."` | `onClick={...}` |

## Important Notes 📝

1. **Links**: Use `<Link>` from `next/link` for internal navigation
2. **Images**: Already in `/public/images/` - use `/images/...` paths
3. **Client-side JS**: Wrap components with `'use client'` directive if they use hooks
4. **Remove .html**: All links should be `/page` not `/page.html`

## Folder Structure

```
tpc-new/
├── app/                 # Pages (App Router)
│   ├── layout.tsx      # Root layout with Header
│   ├── page.tsx        # Homepage (/)
│   └── [folders]/      # Other pages
├── components/         # Reusable components
│   └── Header.tsx     # Navigation
├── public/            # Static assets
│   ├── images/       # ✅ Copied
│   ├── files/        # ✅ Copied
│   └── CNAME         # ✅ Copied
├── styles/
│   └── globals.css   # ✅ All CSS + animations
├── package.json      # ✅ Dependencies configured
├── tailwind.config.ts # ✅ Brand colors configured
└── next.config.js    # ✅ Static export configured
```

## Need Help?

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- React JSX: https://react.dev/learn/writing-markup-with-jsx

## Checklist ☑️

- [ ] Run `npm install` in tpc-new folder
- [ ] Complete homepage sections in `app/page.tsx`
- [ ] Create all other pages
- [ ] Test navigation between pages
- [ ] Test all forms and interactions
- [ ] Build for production (`npm run build`)
- [ ] Deploy the `out/` folder

Good luck with your migration! 🎉
