# Stripe Integration Setup

This guide will help you set up Stripe payments for your Shaysauce website.

## Prerequisites

1. A Stripe account (sign up at https://stripe.com)
2. Netlify, Vercel, or another serverless hosting platform

## Setup Steps

### 1. Get Your Stripe API Keys

1. Log in to your [Stripe Dashboard](https://dashboard.stripe.com)
2. Click on **Developers** in the left sidebar
3. Click on **API keys**
4. Copy your **Publishable key** and **Secret key**
   - For testing: Use the test keys (they start with `pk_test_` and `sk_test_`)
   - For production: Use the live keys (they start with `pk_live_` and `sk_live_`)

### 2. Configure Environment Variables

#### For Local Development:

1. Copy `.env.example` to create a new `.env` file:
   ```bash
   cp .env.example .env
   ```

2. Edit the `.env` file and add your Stripe test keys:
   ```
   STRIPE_SECRET_KEY=sk_test_YOUR_SECRET_KEY_HERE
   STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_PUBLISHABLE_KEY_HERE
   ```

#### For Production (Netlify):

1. Go to your Netlify site dashboard
2. Navigate to **Site settings** > **Environment variables**
3. Add the following variables:
   - `STRIPE_SECRET_KEY`: Your Stripe secret key
   - `STRIPE_PUBLISHABLE_KEY`: Your Stripe publishable key
4. Click **Save**

#### For Production (Vercel):

1. Go to your Vercel project dashboard
2. Navigate to **Settings** > **Environment Variables**
3. Add the same variables as above
4. Click **Save**

### 3. Install Dependencies

Run the following command to install the Stripe Node.js library:

```bash
npm install
```

### 4. Test Locally

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Start Netlify Dev (for testing serverless functions locally):
   ```bash
   netlify dev
   ```

3. Click the "Buy Now" button and test with Stripe's test card:
   - Card number: `4242 4242 4242 4242`
   - Expiry: Any future date
   - CVC: Any 3 digits
   - ZIP: Any 5 digits

### 5. Deploy to Production

1. Push your code to GitHub
2. Connect your repository to Netlify or Vercel
3. Make sure to add your **live** Stripe keys to the environment variables
4. Deploy!

## Important Notes

- **Never commit your `.env` file** to version control (it's already in `.gitignore`)
- Always use **test keys** during development
- Switch to **live keys** only when ready to accept real payments
- Test thoroughly before going live

## Customization

### Changing the Product Price

Edit `/home/user/Shaysauce/script.js` line 21:

```javascript
price: 1200, // $12.00 in cents (change this value)
```

### Changing Shipping Countries

Edit `/home/user/Shaysauce/netlify/functions/create-checkout-session.js` line 40:

```javascript
allowed_countries: ['US', 'CA'], // Add or remove countries
```

### Updating Success/Cancel URLs

The URLs are automatically set based on your deployment URL. To customize them, edit lines 43-44 in `create-checkout-session.js`.

## Troubleshooting

### "Failed to create checkout session" Error

- Check that your Stripe secret key is correctly set in environment variables
- Verify the key starts with `sk_test_` (for test mode) or `sk_live_` (for live mode)
- Check the browser console and serverless function logs for detailed error messages

### Button Does Nothing When Clicked

- Make sure Netlify Dev or your serverless function platform is running
- Check that the function is deployed at `/.netlify/functions/create-checkout-session`
- Verify there are no JavaScript errors in the browser console

### Need Help?

- [Stripe Documentation](https://stripe.com/docs)
- [Netlify Functions Documentation](https://docs.netlify.com/functions/overview/)
- Contact: hello@shaysauce.com
