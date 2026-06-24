# Gemini CLI Agent — okmate.nl

## Site Context
- Framework: Astro (SSG) deployed on Vercel
- Blog posts live in: `src/content/posts/`
- Required frontmatter: `title`, `date`, `summary`, `categories`, `image`
- Categories: `points-miles`, `financial-hacks`, `deals`, `expat-tips`
- Base URL: `https://okmate.nl`

## Writing & Style Constraints
- Tone: Blunt, conversational, insider-focused. Written from personal experience.
- Author: Jack, a producer based in the Netherlands
- Audience: English-speaking expats and Dutch residents interested in personal finance and loyalty schemes
- Never use AI buzzwords (delve, tapestry, testament, groundbreaking, etc.)
- Use plain Markdown for formatting, never LaTeX

## SEO Tasks
- When asked, write valid JSON-LD Article schema for a post
- Suggest meta titles under 60 characters and meta descriptions under 155 characters
- Suggest internal linking opportunities between posts
- Ensure images have descriptive alt text relevant to the Netherlands/finance context
- Target long-tail Dutch market keywords (e.g. "flying blue points netherlands", "best credit card netherlands expat")

## Do Not
- Suggest changes to `astro.config.mjs` without confirming first
- Invent prices, rates or financial figures — always flag these need manual verification
- Use American spelling — this blog is written in British English