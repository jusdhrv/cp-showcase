# Contributing to CP Showcase

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)](https://www.typescriptlang.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)]()

Thank you for considering contributing to **CP Showcase** — I’m a high-school student and building this project in public on the side.

Your help and feedback means the world!

## Why This Project Matters?

I’ve always wanted a single, beautiful place to showcase my CP journey — not just ratings, but growth, insights, mistakes, and pride.

This isn’t just a portfolio. It’s a **living archive of problem-solving craftsmanship**.

If you’re a competitive programmer who’s ever felt the same — welcome home.

## How to Contribute

All contributions are welcome:

- Feature ideas (especially from rated users!)
- Bug reports
- UI/UX feedback
- Documentation improvements
- Code cleanup or refactoring
- Scraper improvements (especially for AtCoder, LeetCode CN, etc.)
- Performance optimizations

### Getting Started

```bash
git clone https://github.com/jusdhrv/cpshowcase.git
cd cpshowcase
npm install
cp .env.example .env.local
# Set up GitHub OAuth app at https://github.com/settings/apps
npm run dev
```

### Making Changes

1. Create a descriptive branch: `feat/sync-leetcode` or `fix/dark-mode-contrast`
2. Make your changes
3. Test thoroughly (especially auth, sync, and rendering)
4. Open a Pull Request with:
   - Clear title and description
   - Screenshots if UI-related
   - Explanation of why this matters

### Code Style

- TypeScript everywhere (no `any`)
- Use shadcn/ui components when possible
- Tailwind-first, no custom CSS unless necessary
- Follow existing patterns
- Prettier + ESLint will run on commit

### Commit Messages

We follow [Conventional Commits](https://conventionalcommits.org):

```txt
feat: add AtCoder sync support
fix: prevent duplicate commits during sync
docs: explain repo structure
ui: improve mobile problem card layout
refactor: extract GitHub sync logic
chore: update dependencies
```

## Reporting Issues

Found a bug? Have an idea?

Please open an issue with:

- Clear title
- Steps to reproduce
- Expected vs actual behavior
- Screenshots/GIFs if relevant
- Your environment (browser, OS)

## License

By contributing, you agree that your contributions will be licensed under the **Mozilla Public License 2.0**.

Let’s build the portfolio platform the CP world deserves — together!

Made with passion by [@jusdhrv](https://github.com/jusdhrv)