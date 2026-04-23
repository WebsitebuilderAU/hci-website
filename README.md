# Harris Cleaning Industry's — Canberra

Production website for Ryan Harris's Canberra-based cleaning business. Single-page React + Vite +
Tailwind site, deployed to GitHub Pages under `/hci-website/`.

## Services

- End-of-Lease cleaning
- Domestic cleaning
- Commercial cleaning
- Window cleaning (residential & commercial)

## Contact

- Phone: 0438 640 447
- Email: harrisryan2004@gmail.com
- Service area: Canberra & ACT

## Develop

```bash
npm install
npm run dev       # local dev server
npm run build     # production build to dist/
npm run preview   # preview the built dist/
```

## Deploy

Pushing to `main` triggers `.github/workflows/pages.yml`, which builds `dist/` and publishes it to
GitHub Pages. The live URL is `https://<org>.github.io/hci-website/`.

The Vite `base` is set to `/hci-website/` in `vite.config.js` to match the Pages sub-path.

## Project structure

```
src/
  App.jsx            # Section composition
  main.jsx           # React entry
  index.css          # Tailwind layers + tokens
  components/
    Header.jsx       # Sticky header + mobile menu
    Hero.jsx         # Navy hero + trust badges
    Services.jsx     # 4-card services grid
    About.jsx        # Ryan portrait + intro
    WhyUs.jsx        # 4-row reasons
    Testimonials.jsx # 3 review cards
    Contact.jsx      # Quote form (mailto) + contact panel
    Footer.jsx       # Nav, contact, credits
    Logo.jsx         # Wordmark with monogram
    Icons.jsx        # Inline SVG icon set
    Reveal.jsx       # Fade-in-on-scroll wrapper
```

Credit line: "Website by Website Builder Australia".
