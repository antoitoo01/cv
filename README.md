# Antonio Torres Gómez — Portfolio

Personal developer portfolio built with [Astro](https://astro.build) and [TailwindCSS](https://tailwindcss.com).

## 🚀 Tech Stack

- [Astro](https://astro.build) — Static site generator
- [TailwindCSS](https://tailwindcss.com) v3 — Utility-first CSS
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [Bun](https://bun.sh) — JavaScript runtime & package manager

## 🛠️ Commands

| Command | Action |
|---------|--------|
| `bun install` | Install dependencies |
| `bun run dev` | Start dev server at `localhost:4321` |
| `bun run build` | Build to `dist/` |
| `bun run preview` | Preview production build |

## 🌐 Deployment

### GitHub Pages

1. Push to `main` branch
2. In the repo Settings → Pages, set:
   - **Source**: GitHub Actions
3. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v2
      - run: bun install
      - run: bun run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
```

### Manual

```bash
bun run build
# Deploy the `dist/` folder to any static host
```

## 🌍 Internationalization

- **English**: `/` (default)
- **Spanish**: `/es`

Toggle language with the button in the top navigation bar.

## 📁 Project Structure

```
src/
├── components/    # Astro components
│   ├── Header.astro
│   ├── Hero.astro
│   ├── About.astro
│   ├── Skills.astro
│   ├── Projects.astro
│   ├── Experience.astro
│   ├── Contact.astro
│   ├── Footer.astro
│   ├── SectionTitle.astro
│   ├── ScrollReveal.astro
│   └── LanguageToggle.astro
├── layouts/       # Page layouts
│   └── Layout.astro
├── pages/         # Route pages
│   ├── index.astro
│   ├── es.astro
│   ├── 404.astro
│   └── robots.txt.ts
├── i18n/          # Translations
│   ├── en.json
│   └── es.json
├── styles/        # Global CSS
│   └── global.css
└── config.ts      # Site configuration & data
```

## 📄 License

MIT
