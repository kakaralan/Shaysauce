# Shopify Integration Setup Guide

This guide will walk you through setting up Shopify Buy Button integration for your hot sauce website. Shopify will handle all payments (including Stripe), inventory, and order management.

## Prerequisites

- A Shopify account (you can start with a free trial at https://www.shopify.com)
- Your hot sauce product created in Shopify

## Step 1: Create Your Shopify Store

1. Go to https://www.shopify.com and click "Start free trial"
2. Follow the prompts to create your store
3. Choose a store name (e.g., "shaysauce")
4. Complete the initial setup wizard

## Step 2: Add Your Product to Shopify

1. In your Shopify Admin, go to **Products** > **Add product**
2. Fill in your product details:
   - **Title**: Shay's Sauce Original
   - **Description**: Add your product description
   - **Price**: $12.00
   - **SKU**: (optional) e.g., SS-001
   - **Inventory**: Set your available quantity
   - **Weight**: 5 oz (for shipping calculations)
   - **Product images**: Upload photos of your hot sauce
3. Click **Save**
4. Note your **Product ID** (you'll see it in the URL: `/products/YOUR_PRODUCT_ID`)

## Step 3: Set Up Shopify Payments (with Stripe)

Shopify can use Stripe as a payment processor:

1. In Shopify Admin, go to **Settings** > **Payments**
2. Under "Shopify Payments", click **Complete account setup**
3. Or, to use Stripe directly:
   - Scroll to "Third-party providers"
   - Click **Choose third-party provider**
   - Select **Stripe**
   - Follow the prompts to connect your Stripe account
4. Configure your payment settings

## Step 4: Create a Buy Button Sales Channel

1. In Shopify Admin, go to **Sales channels** (bottom left sidebar)
2. Click the **+** icon or **Add sales channel**
3. Select **Buy Button**
4. Click **Add channel**

## Step 5: Generate Your Buy Button Code

1. After adding the Buy Button channel, click **Buy Button** in the left sidebar
2. Click **Create a Buy Button**
3. Select **Product**
4. Search for and select "Shay's Sauce Original"
5. Click **Next**
6. Customize your button (optional):
   - Show product title: **OFF** (we already have it in HTML)
   - Show product price: **ON**
   - Show product image: **OFF** (we use the chili emoji)
   - Layout: **Vertical**
7. Click **Next**

## Step 6: Get Your Integration Credentials

On the final screen, you'll see generated code that looks like this:

```javascript
<script>
  var client = ShopifyBuy.buildClient({
    domain: 'your-store-name.myshopify.com',
    storefrontAccessToken: 'abc123def456...'
  });

  ShopifyBuy.UI.onReady(client).then(function (ui) {
    ui.createComponent('product', {
      id: '1234567890',
      // ... more code
    });
  });
</script>
```

You need to extract these three values:

1. **domain**: e.g., `your-store-name.myshopify.com`
2. **storefrontAccessToken**: Long alphanumeric string
3. **Product id**: Usually a numeric ID

## Step 7: Update Your Website Code

Open `script.js` in your website files and replace the placeholder values:

### Find these lines (around line 21-30):

```javascript
var client = ShopifyBuy.buildClient({
    // REPLACE THESE VALUES WITH YOUR SHOPIFY CREDENTIALS
    domain: 'YOUR-STORE-NAME.myshopify.com',
    storefrontAccessToken: 'YOUR-STOREFRONT-ACCESS-TOKEN'
});

ShopifyBuy.UI.onReady(client).then(function (ui) {
    ui.createComponent('product', {
        // REPLACE THIS WITH YOUR PRODUCT ID
        id: 'YOUR-PRODUCT-ID',
```

### Replace with your actual values:

```javascript
var client = ShopifyBuy.buildClient({
    domain: 'shaysauce.myshopify.com',  // Your actual domain
    storefrontAccessToken: 'abc123def456...'  // Your actual token
});

ShopifyBuy.UI.onReady(client).then(function (ui) {
    ui.createComponent('product', {
        id: '1234567890',  // Your actual product ID
```

## Step 8: Configure Shipping

1. In Shopify Admin, go to **Settings** > **Shipping and delivery**
2. Set up your shipping zones and rates
3. Consider offering:
   - Free shipping over $30 (as advertised on the site)
   - Flat rate shipping under $30
4. Save your shipping settings

## Step 9: Test Your Integration

1. Open your website (`index.html`) in a browser
2. Scroll to the "Buy Now" section
3. You should see:
   - Product price
   - Quantity selector
   - "Add to Cart" button
4. Click "Add to Cart" - a shopping cart should slide in from the right
5. Proceed through checkout to test the payment flow
6. **Use Shopify's test mode** to avoid real charges:
   - Use test card: 4242 4242 4242 4242
   - Any future expiry date
   - Any 3-digit CVV

## Step 10: Go Live

1. In Shopify Admin, go to **Settings** > **Plan**
2. Choose a Shopify plan (starts at $29/month)
3. Remove your development mode password:
   - Go to **Online Store** > **Preferences**
   - Scroll to "Password protection"
   - Uncheck "Enable password"
4. Set up your custom domain (optional):
   - Go to **Settings** > **Domains**
   - Add your custom domain (e.g., shaysauce.com)

## Pricing & Fees

### Shopify Plans (choose one):
- **Basic**: $29/month - Good for starting out
- **Shopify**: $79/month - Better for growing businesses
- **Advanced**: $299/month - For high-volume sellers

### Transaction Fees:
- **With Shopify Payments**: 2.9% + 30¢ per transaction (no additional fees)
- **With Third-Party Payment Providers** (like external Stripe):
  - Shopify adds 2% fee
  - Plus Stripe's 2.9% + 30¢
  - Total: ~5% + 30¢

**Recommendation**: Use Shopify Payments (which uses Stripe under the hood) to avoid the extra 2% fee.

## Troubleshooting

### Buy Button doesn't appear
- Check browser console for errors (F12)
- Verify all three credentials are correct
- Make sure product is "Active" in Shopify
- Check that Buy Button sales channel is enabled

### "This product is unavailable"
- Ensure inventory quantity > 0
- Check that product status is "Active"
- Verify the product ID is correct

### Styling looks wrong
- Clear browser cache
- Check that `styles.css` is properly linked
- Verify no browser extensions are blocking styles

### Payment not working
- Ensure Shopify Payments or Stripe is properly configured
- Check that your Shopify plan is active (not trial expired)
- Verify SSL certificate is active on your domain

## Additional Features to Configure

### Email Notifications
1. Go to **Settings** > **Notifications**
2. Customize order confirmation emails
3. Add your branding and logo

### Tax Settings
1. Go to **Settings** > **Taxes and duties**
2. Enable automatic tax calculation
3. Configure based on your location

### Legal Pages
Shopify can auto-generate:
1. Go to **Settings** > **Legal**
2. Generate Privacy Policy, Terms of Service, etc.
3. Add links to these in your website footer

## Support Resources

- Shopify Help Center: https://help.shopify.com
- Buy Button Documentation: https://shopify.dev/custom-storefronts/tools/buy-button
- Shopify Community: https://community.shopify.com
- 24/7 Shopify Support (with paid plans)

## Next Steps

After setup is complete:
1. Add product images to Shopify (will show in cart/checkout)
2. Set up Google Analytics for tracking
3. Configure abandoned cart recovery
4. Set up customer accounts (optional)
5. Create discount codes for promotions

---

Need help? Check the Shopify documentation or reach out to Shopify support!
