# Storify - Your Digital Marketplace

Storify is a modern, responsive static web project for an e-commerce platform. It features a clean UI, mobile-first design, and interactive sidebars for navigation and shopping cart functionality. This project is built with Tailwind CSS and vanilla JavaScript, making it easy to customize and extend. and more

## Features

- Modern, mobile-first responsive design
- Custom theme with primary/secondary color palette
- Interactive sidebar overlays for mobile menu and cart
- Event-driven UI with vanilla JavaScript (no frameworks)
- Product, About, and Contact pages
- Boxicons for UI and brand icons
- Google Fonts: Inter and Poppins

## Tech Stack

- **HTML5**
- **Tailwind CSS v4.1.12** (with custom `@theme` configuration)
- **Vanilla JavaScript** (for sidebar and cart interactions)
- **Boxicons** (icon font via CDN)
- **Google Fonts** (Inter, Poppins)

## Project Structure

```
index.html
pages/
  products.html
  about.html
  contact.html
src/
  input.css         # Tailwind source with custom theme
build/
  output.css        # Compiled CSS (do not edit directly)
vendor/
  js/app.js         # JavaScript for UI interactions
assets/
  images/           # Static images (logo, illustrations)
```

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/xrtvann/storify-static-web.git
cd storify-static-web
```

### 2. Install Dependencies

This project uses Tailwind CLI. Install dependencies with npm:

```bash
npm install
```

### 3. Build CSS

To generate the final CSS from the Tailwind source:

```bash
npm run build
```

The compiled CSS will be in `build/output.css`.

### 4. Development Mode

To watch for changes and auto-build CSS during development:

```bash
npm run dev
```

### 5. Open in Browser

Open `index.html` directly in your browser, or use a local server for best results.

## Customization

- Edit `src/input.css` to change the Tailwind theme or add custom styles.
- Update HTML files in the root or `pages/` directory for content changes.
- Modify `vendor/js/app.js` for JavaScript behavior.

## License

MIT
