# NOVA — Modern Company Landing Page

A responsive landing page for **NOVA**, a fictional AI productivity platform. The project was built as a front-end internship assignment with a focus on clean UI, responsive behavior, reusable React data, and small interactions that make the page feel like a real product site.

## Live demo

Deploy the project to Vercel, Netlify, GitHub Pages, or Cloudflare Pages. After deployment, add the final URL here.

`Live demo: <add deployed URL>`

## Technologies

- React + Vite
- JavaScript (ES modules)
- CSS with responsive media queries
- Lucide React icons
- Google Fonts (DM Sans + Manrope)

## Included features

- Responsive navigation with mobile hamburger menu
- Smooth section navigation
- Hero/product dashboard mockup
- Trusted-by logo strip
- 6 feature cards
- Product/about section
- 3-step “How it works” section
- Animated statistics on scroll
- 3 solutions/use cases
- 3 testimonials
- 3 pricing plans
- Monthly/yearly pricing toggle
- 6-question FAQ accordion
- Demo modal
- Newsletter form validation
- Dark/light mode toggle
- Hover states for buttons and cards
- Semantic sections, labels, and accessible accordion state

## Project structure

```text
nova-landing-page/
├── index.html
├── package.json
├── README.md
└── src/
    ├── main.jsx
    └── styles.css
```

## Installation

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
npm run preview
```

## Screenshots

The main page is designed to be captured at desktop and mobile breakpoints after running the Vite dev server. Add exported screenshots to `screenshots/` before submission if the recruiter specifically requires image files in the repository.

Suggested files:

- `screenshots/desktop.png`
- `screenshots/mobile.png`

## Design decisions

I went with a warm off-white background, black typography, and a lime accent so the site feels more like a modern productivity brand than a generic SaaS template. The hero uses a lightweight dashboard mockup instead of stock imagery so the product is understandable immediately. Large typography and generous spacing keep the page editorial and premium, while cards and borders create structure without making the UI feel heavy.

## Component/data approach

The main React component is kept readable by storing repeated content in arrays (`features`, `testimonials`, and `faqs`) and mapping over those arrays. Interaction state is handled with React hooks for the mobile menu, theme, FAQ accordion, pricing toggle, demo modal, and statistics animation.

For a larger production project, I would split the page into separate components such as `Navbar`, `Hero`, `FeatureGrid`, `Pricing`, `FAQ`, and `Footer`, and move repeated content into a dedicated data file.

## Challenges and tradeoffs

The main tradeoff was keeping the assignment easy to run and review. I intentionally avoided a large UI framework and built the visual system in CSS so the responsive behavior and styling decisions are easy to inspect. The dashboard is a CSS/HTML mockup rather than an external image, which keeps the demo self-contained and fast.

## AI tools used

AI assistance was used for initial scaffolding, copy brainstorming, and checking implementation ideas. The final implementation should be reviewed and understood by the developer before submission, especially the React state, event handlers, responsive CSS, and accessibility behavior.

## Production improvements

With more time, I would add real authentication/product links, connect the newsletter form to a backend, add automated tests, optimize fonts and assets locally, add proper analytics/consent handling, and split the single-page component into smaller reusable files.
