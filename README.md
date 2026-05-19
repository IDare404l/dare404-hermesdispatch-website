# hermesmissionfreedom.ai

Mission Freedom website - AI automation documentation and daily newsletter.

## Tech Stack

- **Framework**: Astro 4.x
- **Styling**: Tailwind CSS
- **Deployment**: Static export (Cloudflare Pages / Vercel compatible)
- **Domain**: https://hermesmissionfreedom.ai
- **Email**: daily@hermesdispatch.dev (HermesDispatch)

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Structure

```
src/
├── layouts/        # Page layouts
├── pages/          # Astro pages
├── components/     # Reusable components
├── data/           # Newsletter data
└── api/            # API routes (future)
```

## Newsletter

Newsletter issues are stored in `src/data/newsletters.ts`. 
The daily newsletter generator script updates this file automatically.

## Deployment

Build output goes to `dist/` directory.

```bash
# Deploy to Cloudflare Pages
npm run build
# Upload dist/ to your static host
```

## Credits

Built by dare404 using Hermes Agent + Astro.
Part of the Mission Freedom automation project.
