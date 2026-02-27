const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method Not Allowed' })
        };
    }

    try {
        const { productName, price, quantity } = JSON.parse(event.body);

        // Validate input
        if (!productName || !price || !quantity) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Missing required fields' })
            };
        }

        // Create Stripe Checkout Session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: productName,
                            description: '5 oz bottle of handcrafted hot sauce',
                        },
                        unit_amount: price,
                    },
                    quantity: quantity,
                },
            ],
            mode: 'payment',
            success_url: `${process.env.URL || 'http://localhost:8888'}/success.html`,
            cancel_url: `${process.env.URL || 'http://localhost:8888'}/cancel.html`,
            shipping_address_collection: {
                allowed_countries: ['US', 'CA'],
            },
        });

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url: session.url }),
        };
    } catch (error) {
        console.error('Stripe error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: 'Failed to create checkout session',
                message: error.message
            }),
        };
    }
};
