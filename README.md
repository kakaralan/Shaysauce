# Shay's Sauce

A minimalist but welcoming website for selling handcrafted hot sauce.

## Overview

This is a single-product e-commerce website designed to showcase and sell Shay's Sauce - a handcrafted hot sauce made in small batches. The site features a clean, modern design with warm colors that reflect the product's artisanal nature.

## Features

- **Minimalist Design**: Clean layout with plenty of white space
- **Welcoming Aesthetic**: Warm color palette (oranges and reds) that evokes the hot sauce brand
- **Responsive**: Works beautifully on desktop, tablet, and mobile devices
- **Interactive Elements**:
  - Quantity selector for ordering
  - Smooth scrolling navigation
  - Hover effects and animations
  - Dynamic price calculation
- **Product Showcase**:
  - Hero section with product highlight
  - Feature cards explaining product benefits
  - Ingredients list
  - Brand story section

## Structure

```
├── index.html       # Main HTML structure
├── styles.css       # CSS styling (minimalist & welcoming design)
├── script.js        # JavaScript for interactive elements
└── README.md        # This file
```

## Getting Started

Simply open `index.html` in your web browser to view the site locally.

For production deployment, you can host the files on any static web hosting service like:
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Any web server

## Customization

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #d84315;
    --primary-dark: #bf360c;
    --secondary-color: #ff6f3c;
    /* ... */
}
```

### Updating Product Information
- Price: Edit `pricePerBottle` in `script.js` and the display price in `index.html`
- Product name: Update in `index.html`
- Ingredients: Update in the ingredients section of `index.html`

### Adding Payment Integration
Replace the alert in `script.js` with your payment processor integration (Stripe, PayPal, etc.)

## Design Philosophy

The site follows a minimalist approach while maintaining warmth through:
- Generous white space
- Clean typography
- Warm color palette
- Subtle animations
- Clear hierarchy
- Simple, intuitive navigation

## Browser Support

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## License

All rights reserved.
