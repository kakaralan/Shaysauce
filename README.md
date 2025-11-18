# Shay's Sauce

A minimalist but welcoming website for selling handcrafted hot sauce with integrated Shopify e-commerce.

## Overview

This is a single-product e-commerce website designed to showcase and sell Shay's Sauce - a handcrafted hot sauce made in small batches. The site features a clean, modern design with warm colors that reflect the product's artisanal nature.

**Now with full e-commerce integration via Shopify Buy Button!** Accept payments, manage inventory, and process orders seamlessly.

## Features

- **Minimalist Design**: Clean layout with plenty of white space
- **Welcoming Aesthetic**: Warm color palette (oranges and reds) that evokes the hot sauce brand
- **Responsive**: Works beautifully on desktop, tablet, and mobile devices
- **Full E-Commerce Integration**:
  - Shopify Buy Button for seamless checkout
  - Stripe payment processing via Shopify
  - Shopping cart functionality
  - Inventory management
  - Order tracking
  - Automated email notifications
- **Interactive Elements**:
  - Smooth scrolling navigation
  - Hover effects and animations
  - Dynamic shopping cart
- **Product Showcase**:
  - Hero section with product highlight
  - Feature cards explaining product benefits
  - Ingredients list
  - Brand story section

## Structure

```
├── index.html          # Main HTML structure with Shopify Buy Button integration
├── styles.css          # CSS styling (minimalist & welcoming design + Shopify overrides)
├── script.js           # Shopify Buy Button initialization & site interactions
├── SHOPIFY_SETUP.md    # Detailed Shopify integration guide
└── README.md           # This file
```

## Quick Start

### 1. View the Site Locally

Simply open `index.html` in your web browser to view the site design.

Note: The Buy Button won't work until you configure Shopify (see next step).

### 2. Set Up Shopify Integration

**This is required to accept payments!**

Follow the detailed instructions in `SHOPIFY_SETUP.md` to:
1. Create a Shopify store (free trial available)
2. Add your product
3. Set up Shopify Payments with Stripe
4. Generate Buy Button credentials
5. Update `script.js` with your credentials

**Quick version:**
1. Create a Shopify store at https://www.shopify.com
2. Add your product (Shay's Sauce Original - $12)
3. Go to Sales Channels > Add Buy Button
4. Copy your credentials to `script.js` lines 23-30:
   - Replace `YOUR-STORE-NAME.myshopify.com`
   - Replace `YOUR-STOREFRONT-ACCESS-TOKEN`
   - Replace `YOUR-PRODUCT-ID`

### 3. Deploy Your Site

Host the files on any static web hosting service:
- **GitHub Pages** (Free, easy setup)
- **Netlify** (Free tier, automatic deployments)
- **Vercel** (Free tier, great performance)
- **AWS S3 + CloudFront**
- Any web server with HTTPS

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

The Shopify Buy Button will automatically inherit these colors!

### Updating Product Information
- **Price & Inventory**: Update in your Shopify Admin dashboard
- **Product name**: Update in `index.html` and Shopify Admin
- **Ingredients**: Update in the ingredients section of `index.html`
- **Product images**: Add in Shopify Admin (shows in cart/checkout)

### Changing the Product
To sell a different product:
1. Create a new product in Shopify
2. Get the new Product ID
3. Update the `id` field in `script.js` (line 30)

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

## Costs & Pricing

### Shopify Plans:
- **Basic Plan**: $29/month - Perfect for starting out
- Includes hosting, SSL certificate, and unlimited products

### Payment Processing:
- **Shopify Payments** (recommended): 2.9% + 30¢ per transaction
- **Third-party payment processors**: Additional 2% Shopify fee + processor fees

### Total Monthly Cost Estimate:
- Shopify subscription: $29
- Payment fees: ~3% per sale
- **Example**: At $1000/month in sales = $29 + $30 = $59 total costs

No additional costs for:
- SSL certificate (included)
- Website hosting (included)
- Inventory management (included)
- Email notifications (included)

## Why Shopify + Stripe?

This setup gives you:
- **Professional checkout** with customer trust
- **Automatic inventory tracking**
- **Order management** dashboard
- **Customer database**
- **Abandoned cart recovery**
- **Email marketing tools**
- **Sales analytics**
- **Mobile app** to manage on the go
- **PCI compliance** for secure payments
- **Automatic tax calculation**

All without writing any backend code!

## Support & Documentation

- **Shopify Setup**: See `SHOPIFY_SETUP.md` for detailed instructions
- **Shopify Help**: https://help.shopify.com
- **Buy Button Docs**: https://shopify.dev/custom-storefronts/tools/buy-button

## License

All rights reserved.
