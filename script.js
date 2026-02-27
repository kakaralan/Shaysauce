// ============================================
// STRIPE CHECKOUT INTEGRATION
// ============================================

// Stripe Buy Now Button Handler
const buyButton = document.getElementById('buy-now-btn');
let isProcessing = false;

if (buyButton) {
    buyButton.addEventListener('click', async () => {
        // Prevent double-clicks
        if (isProcessing) return;

        isProcessing = true;
        buyButton.textContent = 'Processing...';
        buyButton.disabled = true;

        try {
            // Call serverless function to create Stripe Checkout session
            const response = await fetch('/.netlify/functions/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productName: "Shay's Sauce Original",
                    price: 1200, // $12.00 in cents
                    quantity: 1
                })
            });

            if (!response.ok) {
                throw new Error('Failed to create checkout session');
            }

            const { url } = await response.json();

            // Redirect to Stripe Checkout
            window.location.href = url;
        } catch (error) {
            console.error('Checkout error:', error);
            alert('Unable to process checkout. Please try again or contact us at hello@shaysauce.com');

            // Reset button state
            isProcessing = false;
            buyButton.textContent = 'Buy Now - $12';
            buyButton.disabled = false;
        }
    });
}

// ============================================
// SMOOTH SCROLL NAVIGATION
// ============================================

// Smooth scroll with offset for fixed header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');

        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// HEADER SCROLL EFFECT
// ============================================

let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// ============================================
// 3D BOTTLE INTERACTION (Optional)
// ============================================

// Pause rotation on hover
const bottle = document.querySelector('.bottle-3d');

if (bottle) {
    bottle.addEventListener('mouseenter', () => {
        bottle.style.animationPlayState = 'paused';
    });

    bottle.addEventListener('mouseleave', () => {
        bottle.style.animationPlayState = 'running';
    });
}
