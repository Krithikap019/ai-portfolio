# AI Portfolio — Personal Website

A personal portfolio site showcasing multiple AI projects, built with Next.js and deployed on Vercel.

## Project Structure

```
ai-portfolio/
├── app/
│   ├── page.jsx              ← Homepage with project showcase
│   ├── layout.jsx            ← Root layout (fonts, metadata)
│   ├── globals.css
│   ├── projects/
│   │   └── chat/
│   │       └── page.jsx      ← Live AI chat demo
│   └── api/
│       └── chat/
│           └── route.js      ← Claude API endpoint
├── components/
│   └── ProjectCard.jsx       ← Reusable project card
├── .env.example              ← Copy to .env.local
├── .gitignore
└── package.json
```

## Adding a New AI Project

1. Create a new folder: `app/projects/your-project-name/`
2. Add `page.jsx` with your project UI
3. Add an API route if needed: `app/api/your-endpoint/route.js`
4. Add the project to the `projects` array in `app/page.jsx`

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local
# Edit .env.local and add your ANTHROPIC_API_KEY

# 3. Run locally
npm run dev
# Visit http://localhost:3000
```

## Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Or connect your GitHub repo at vercel.com — auto-deploys on every push
```

After deploying, add your environment variables in:
**Vercel Dashboard → Project → Settings → Environment Variables**

## Customizing

- Update your name in `app/page.jsx` and `app/layout.jsx`
- Change the color accent (`#6c63ff`) to your preferred color
- Add your GitHub/LinkedIn/email links in the contact section
- Add more projects by following the pattern in `app/projects/chat/`
