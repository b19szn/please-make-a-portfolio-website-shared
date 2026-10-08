# NovaFlow — Modern SaaS Landing Page (HTML/CSS/JS)

This project is a self-contained, responsive SaaS landing page built with plain HTML, CSS, and vanilla JavaScript. It includes:
- A hero section with a visually engaging illustration
- A feature Bento Grid (asymmetric grid) to showcase capabilities
- A pricing section with monthly/yearly toggle
- A responsive contact form with client-side validation
- Dark mode with a simple theme toggle

How to run locally
1) Download the repository or copy the files to a local folder.
2) Open index.html in your browser (no build step required).

Optional: serve locally
- If you have Node.js installed, you can run a quick local server:
  - npx http-server .
  - or npm install -g http-server
  - Then open http://localhost:8080

File overview
- index.html: Page structure and content (hero, features, pricing, contact)
- styles.css: All styling (glassmorphism, grid layout, typography, responsive rules)
- script.js: Interactive behaviors (pricing toggle, contact form, theme toggle)
- README.md: This file

How to customize
- Edit the hero copy in index.html
- Modify features under the Features section (the Bento Grid)
- Update pricing tiers in script.js (or directly in HTML price blocks)
- Adapt contact form fields and validation as needed

Accessibility
- Semantic landmarks and ARIA labels are included
- Keyboard accessible controls (buttons, links)

License
- This is a starter template. Adapt and extend as needed.