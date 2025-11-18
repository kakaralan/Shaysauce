// ============================================
// SHOPIFY BUY BUTTON CONFIGURATION
// ============================================
//
// SETUP INSTRUCTIONS:
// 1. Go to your Shopify Admin: yourstorename.myshopify.com/admin
// 2. Go to Sales Channels > Add sales channel > Buy Button
// 3. Create a new Buy Button for your product
// 4. Copy the generated code and replace the values below:
//    - domain: Your Shopify store domain
//    - storefrontAccessToken: From the generated code
//    - productId: From the generated code

// Initialize Shopify Buy Button when SDK is loaded
function initializeShopifyBuyButton() {
    if (typeof ShopifyBuy === 'undefined') {
        console.error('Shopify Buy Button SDK not loaded. Please check your internet connection.');
        return;
    }

    var client = ShopifyBuy.buildClient({
        // REPLACE THESE VALUES WITH YOUR SHOPIFY CREDENTIALS
        domain: 'YOUR-STORE-NAME.myshopify.com',
        storefrontAccessToken: 'YOUR-STOREFRONT-ACCESS-TOKEN'
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('product', {
            // REPLACE THIS WITH YOUR PRODUCT ID
            id: 'YOUR-PRODUCT-ID',
            node: document.getElementById('shopify-buy-button-container'),
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {
                product: {
                    styles: {
                        product: {
                            '@media (min-width: 601px)': {
                                'max-width': 'calc(25% - 20px)',
                                'margin-left': '20px',
                                'margin-bottom': '50px'
                            },
                            'text-align': 'left'
                        },
                        title: {
                            'font-size': '24px',
                            'color': '#2c2c2c',
                            'font-weight': 'bold'
                        },
                        price: {
                            'font-size': '32px',
                            'color': '#d84315',
                            'font-weight': '700'
                        },
                        compareAt: {
                            'font-size': '18px',
                            'color': '#666'
                        },
                        button: {
                            'font-family': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
                            'font-size': '18px',
                            'padding-top': '16px',
                            'padding-bottom': '16px',
                            'background-color': '#d84315',
                            'border-radius': '30px',
                            'font-weight': '600',
                            ':hover': {
                                'background-color': '#bf360c'
                            },
                            ':focus': {
                                'background-color': '#bf360c'
                            }
                        },
                        quantityInput: {
                            'font-size': '18px',
                            'padding-top': '16px',
                            'padding-bottom': '16px'
                        }
                    },
                    contents: {
                        img: false,
                        title: false,
                        price: true
                    },
                    text: {
                        button: 'Add to Cart'
                    }
                },
                productSet: {
                    styles: {
                        products: {
                            '@media (min-width: 601px)': {
                                'margin-left': '-20px'
                            }
                        }
                    }
                },
                modalProduct: {
                    contents: {
                        img: false,
                        imgWithCarousel: true,
                        button: false,
                        buttonWithQuantity: true
                    },
                    styles: {
                        product: {
                            '@media (min-width: 601px)': {
                                'max-width': '100%',
                                'margin-left': '0px',
                                'margin-bottom': '0px'
                            }
                        },
                        button: {
                            'font-family': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
                            'font-size': '18px',
                            'padding-top': '16px',
                            'padding-bottom': '16px',
                            'background-color': '#d84315',
                            'border-radius': '30px',
                            'font-weight': '600',
                            ':hover': {
                                'background-color': '#bf360c'
                            },
                            ':focus': {
                                'background-color': '#bf360c'
                            }
                        },
                        title: {
                            'font-family': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
                            'font-weight': 'bold',
                            'font-size': '26px',
                            'color': '#2c2c2c'
                        },
                        price: {
                            'font-family': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
                            'font-weight': 'bold',
                            'font-size': '32px',
                            'color': '#d84315'
                        },
                        compareAt: {
                            'font-family': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
                            'font-weight': 'normal',
                            'font-size': '18px',
                            'color': '#666'
                        }
                    },
                    text: {
                        button: 'Add to cart'
                    }
                },
                option: {},
                cart: {
                    styles: {
                        button: {
                            'font-family': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
                            'font-size': '18px',
                            'padding-top': '16px',
                            'padding-bottom': '16px',
                            'background-color': '#d84315',
                            'border-radius': '30px',
                            'font-weight': '600',
                            ':hover': {
                                'background-color': '#bf360c'
                            },
                            ':focus': {
                                'background-color': '#bf360c'
                            }
                        }
                    },
                    text: {
                        total: 'Subtotal',
                        button: 'Checkout'
                    }
                },
                toggle: {
                    styles: {
                        toggle: {
                            'font-family': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
                            'background-color': '#d84315',
                            ':hover': {
                                'background-color': '#bf360c'
                            },
                            ':focus': {
                                'background-color': '#bf360c'
                            }
                        }
                    }
                }
            }
        });
    });
}

// Wait for Shopify Buy SDK to load
if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
        initializeShopifyBuyButton();
    } else {
        loadScript();
    }
} else {
    loadScript();
}

function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    script.onload = function() {
        initializeShopifyBuyButton();
    };
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
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
