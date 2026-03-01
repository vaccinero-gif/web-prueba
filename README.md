# Iberia Atlantic Advisors Website

Production-ready Next.js multilingual website for a boutique cross-border advisory firm in Spain.

## Stack
- Next.js App Router + TypeScript
- Tailwind CSS
- next-intl for locale routing and message loading
- Content in `content/{locale}/site.json`

## Run
```bash
npm install
npm run dev
npm run build
npm start
```

## Routes
Locale prefix routing: `/en`, `/es`, `/fr`, `/de`, `/it`, `/pt`.
EN and ES are fully populated. Other locales are scaffolded with `translationNeeded` marker.

## Content management
- Main content: `content/{locale}/site.json`
- UI strings: `messages/{locale}.json`
- Guides/FAQ/Glossary/Services/Team are locale-specific in each file.

## SEO and AI indexing
- Localized metadata + OpenGraph in locale layout.
- `public/sitemap.xml` with all localized routes.
- `public/robots.txt`
- `public/llms.txt`
- JSON-LD: Organization/ProfessionalService, Person, FAQPage, Article.

## Contact form
`POST /api/contact` validates fields and logs payload server-side.
To connect email later, replace `console.log` with provider integration (e.g., SMTP, Resend, SES) in `src/app/api/contact/route.ts`.

## Deploy
### Vercel
1. Import repo.
2. Framework preset: Next.js.
3. Deploy.

### Netlify
1. Build command: `npm run build`
2. Publish directory: `.next`
3. Use Next.js runtime plugin.

## How to add a new language
1. Add locale code in `src/i18n/routing.ts`.
2. Create `messages/{locale}.json`.
3. Duplicate `content/en/site.json` to `content/{locale}/site.json` and translate.
4. Ensure locale is included in hreflang/canonical generation (`src/lib/site-config.ts` + locale layout).
5. Regenerate `public/sitemap.xml` to include new locale routes.
6. Run checks: `npm run build`.


## Build note (server/client boundaries)
- Client components must import only from `src/lib/site-config.ts` (no filesystem access).
- Disk content loading is server-only in `src/lib/site.server.ts` with `import 'server-only'`.
