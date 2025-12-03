# CP Showcase

**Your competitive programming journey, beautifully showcased — one link for all your solves.**

[![Vercel](https://img.shields.io/badge/vercel-deployed-brightgreen.svg)](https://cpshowcase.com)
[![Next.js](https://img.shields.io/badge/next.js-15-black.svg)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/typescript-5.3-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/tailwindcss-3.4-06B6D4.svg)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/ui-shadcn-000000.svg)](https://ui.shadcn.com/)
[![GitHub Powered](https://img.shields.io/badge/powered_by-GitHub-181717.svg)](https://github.com)
[![License](https://img.shields.io/badge/license-MPL%202.0-blue.svg)](https://opensource.org/licenses/MPL-2.0)
[![Status](https://img.shields.io/badge/status-active%20development-brightgreen.svg)]()

CP Showcase is a **public, open-source platform** that lets any competitive programmer create a stunning, auto-updating portfolio of their solved problems across Codeforces, AtCoder, LeetCode, CodeChef, SPOJ, and more — all powered by their own GitHub repository.

No more scattered profiles. No manual updates. Just one beautiful, shareable link that grows with you.

Live at → [https://cpshowcase.com](https://cpshowcase.com)

## Features

- Auto-sync accepted submissions from major platforms
- Beautiful public profiles with rating graphs, topic radars, streaks, and heatmaps
- Full data ownership — all problems and solutions stored in **your GitHub repo** (.mdx + .cpp/.py files)
- Gorgeous, dark-mode-first UI built with Next.js 15, Tailwind, and shadcn/ui
- Instant search, filtering, and responsive design (mobile PWA ready)
- Private notes, wrong attempts, and draft editing in `/dashboard`
- One-click PDF export for resumes
- Open Graph images for perfect social sharing

## Tech Stack

- **Frontend**: Next.js 15 (App Router), TypeScript, Tailwind CSS
- **UI**: [shadcn/ui](https://ui.shadcn.com/), Lucide icons, Recharts
- **Auth**: NextAuth.js (GitHub OAuth)
- **Data Storage**: User-owned GitHub repositories (via Octokit + GitHub API)
- **Sync Engine**: Custom scrapers + platform APIs (Codeforces, CodeChef, etc.)
- **Deployment**: Vercel
- **License**: Mozilla Public License 2.0 (MPL-2.0)

## Project Structure

```
cpshowcase/
├── app/                  # Next.js 15 app router
│   ├── (site)/           # Public-facing routes
│   ├── dashboard/        # Auth-protected admin
│   └── api/              # Server actions & routes
├── components/           # Reusable UI components
│   └── ui/               # shadcn/ui components
├── lib/                  # Utilities, scrapers, GitHub sync logic
├── content/              # Schema, examples, templates
├── public/               # Static assets
├── scripts/              # Sync workers, seeders
└── docs/                 # Documentation (coming soon)
```

## Quick Start (Development)

```bash
git clone https://github.com/jusdhrv/cpshowcase.git
cd cpshowcase
cp .env.example .env.local
npm install
npm run dev
```

### Required Environment Variables (`.env.local`)

```env
...TBD
```

## Documentation

More detailed docs coming soon in `/docs`:

- Architecture decisions
- Sync pipeline design
- MDX + code file schema
- Deployment & scaling

## Contributing

I’m a high-school student and building this project in public on the side.

Contributions are very welcome — especially from fellow competitive programmers who want this to exist.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## License

This project is licensed under the **Mozilla Public License 2.0** — see [LICENSE](LICENSE) for details.

Let’s build the portfolio platform the CP world deserves — together!

Made with passion by [@jusdhrv](https://github.com/jusdhrv)