'use client';

import { Button } from '@/components/ui/button';
import BottleVisual from './bottle-visual';

export default function HeroSection() {
  const handleCheckout = async () => {
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productName: "Shay's Sauce Original",
          price: 1200,
          quantity: 1
        })
      });
      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      console.error('Checkout error:', error);
    }
  };

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-primary/90 to-primary pt-20">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 px-4">
        <div className="text-white flex flex-col justify-center">
          <h1 className="text-6xl font-bold mb-4">Heat Meets Flavor</h1>
          <p className="text-xl mb-8">Small batch. Big taste. One perfect sauce.</p>
          <div>
            <Button
              size="lg"
              variant="secondary"
              onClick={handleCheckout}
              className="text-lg"
            >
              Buy Now - $12
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <BottleVisual />
        </div>
      </div>
    </section>
  );
}
