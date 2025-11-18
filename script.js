// Quantity Selector
const quantityInput = document.getElementById('quantity');
const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');
const totalPriceElement = document.getElementById('totalPrice');
const addToCartBtn = document.getElementById('addToCart');

const pricePerBottle = 12;

// Update total price display
function updateTotalPrice() {
    const quantity = parseInt(quantityInput.value);
    const total = quantity * pricePerBottle;
    totalPriceElement.textContent = `$${total}`;
}

// Decrease quantity
decreaseBtn.addEventListener('click', () => {
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
        updateTotalPrice();
    }
});

// Increase quantity
increaseBtn.addEventListener('click', () => {
    let currentValue = parseInt(quantityInput.value);
    if (currentValue < 12) {
        quantityInput.value = currentValue + 1;
        updateTotalPrice();
    }
});

// Update price when quantity input changes directly
quantityInput.addEventListener('input', () => {
    let value = parseInt(quantityInput.value);

    // Validate input
    if (isNaN(value) || value < 1) {
        quantityInput.value = 1;
    } else if (value > 12) {
        quantityInput.value = 12;
    }

    updateTotalPrice();
});

// Add to Cart button
addToCartBtn.addEventListener('click', () => {
    const quantity = parseInt(quantityInput.value);
    const total = quantity * pricePerBottle;

    // Simple alert for now (in a real site, this would integrate with a cart system)
    alert(`🌶️ Added ${quantity} bottle${quantity > 1 ? 's' : ''} to cart!\n\nTotal: $${total}\n\nThis is a demo site. In production, this would integrate with a payment processor like Stripe or PayPal.`);

    // Add a nice animation to the button
    addToCartBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        addToCartBtn.style.transform = 'scale(1)';
    }, 100);
});

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

// Add scroll effect to header
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

// Initialize
updateTotalPrice();
