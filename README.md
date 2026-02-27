# Shay's Sauce - Landing Page

A simple, elegant landing page for Shay's handcrafted hot sauce with integrated Stripe payments.

## Features

- 🌶️ **Bold Red Design** - Eye-catching gradient background that emphasizes the heat
- 🔄 **3D Rotating Bottle** - CSS-powered 3D animation showcasing the product
- 💳 **Stripe Integration** - Secure checkout via Stripe Checkout
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ♿ **Accessible** - Respects prefers-reduced-motion for animation-sensitive users
- ⚡ **Fast & Lightweight** - Built with vanilla JavaScript, no heavy frameworks

## Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Build Tool**: Vite
- **Payments**: Stripe Checkout
- **Hosting**: Netlify/Vercel (with serverless functions)

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Stripe account (for payments)
- Netlify account (for deployment with serverless functions)

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up Stripe:**
   - Copy `.env.example` to `.env`
   - Add your Stripe test API keys (see `STRIPE_SETUP.md` for details)

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Test serverless functions locally:**
   ```bash
   npm install -g netlify-cli  # Install Netlify CLI if not already installed
   netlify dev
   ```

5. Open your browser to the URL shown (typically `http://localhost:8888`)

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Project Structure

```
shaysauce/
├── index.html                    # Main landing page
├── success.html                  # Order success page
├── cancel.html                   # Checkout cancelled page
├── styles.css                    # All styling including 3D animations
├── script.js                     # Stripe integration and interactions
├── netlify/
│   └── functions/
│       └── create-checkout-session.js  # Serverless function for Stripe
├── package.json                  # Dependencies and scripts
├── .env.example                  # Environment variables template
├── STRIPE_SETUP.md              # Stripe integration guide
└── README.md                     # This file
```

## Deployment

### Deploy to Netlify

1. **Connect your repository:**
   - Go to [Netlify](https://netlify.com) and create a new site
   - Connect your GitHub repository

2. **Configure environment variables:**
   - Go to Site Settings > Environment Variables
   - Add `STRIPE_SECRET_KEY` with your Stripe secret key
   - Add `STRIPE_PUBLISHABLE_KEY` with your Stripe publishable key

3. **Deploy:**
   - Push to your main branch, and Netlify will automatically deploy
   - The serverless function will be available at `/.netlify/functions/create-checkout-session`

### Deploy to Vercel

Similar process - connect repository, add environment variables, and deploy. Update the function path in `script.js` if needed for Vercel's serverless function structure.

## Customization

### Change Product Price

Edit `script.js` line 21:
```javascript
price: 1200, // $12.00 in cents
```

### Update Color Scheme

Edit CSS variables in `styles.css`:
```css
:root {
    --primary-red: #DC143C;
    --dark-red: #8B0000;
    --light-red: #FF6B6B;
    /* ... */
}
```

### Modify 3D Bottle Animation

Edit the animation duration in `styles.css`:
```css
.bottle-3d {
    animation: rotate3d 12s linear infinite; /* Change 12s to your preferred duration */
}
```

### Add Real Product Images

Replace the placeholder images in the gallery section of `index.html` and remove the "Coming Soon" text.

## Testing Payments

Use Stripe's test card numbers:
- **Success:** 4242 4242 4242 4242
- **Decline:** 4000 0000 0000 0002
- Use any future expiry date and any 3-digit CVC

See [Stripe's testing guide](https://stripe.com/docs/testing) for more test cards.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lighthouse Performance Score: 90+
- First Contentful Paint: <1.5s
- No JavaScript frameworks = minimal bundle size

## Accessibility

- WCAG AA compliant color contrast
- Keyboard navigation support
- Screen reader compatible
- Respects `prefers-reduced-motion` media query

## License

Private project - All rights reserved.

## Contact

For questions or support:
- Email: hello@shaysauce.com
- Social: @shaysauce

---

Made with 🌶️ by Shay
