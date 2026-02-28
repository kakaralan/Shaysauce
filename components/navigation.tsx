import { Button } from '@/components/ui/button';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur border-b">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className="text-2xl font-bold text-primary">Shay's Sauce</div>
        <div className="flex gap-4">
          <Button variant="ghost" asChild>
            <a href="#about">About</a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
