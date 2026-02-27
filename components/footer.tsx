import { Separator } from '@/components/ui/separator';

export default function Footer() {
  return (
    <footer className="bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <Separator className="mb-8" />
        <div className="text-center space-y-4">
          <div className="text-2xl font-bold text-primary">Shay's Sauce</div>
          <p className="text-muted-foreground">
            Handcrafted hot sauce. Made with love.
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Shay's Sauce. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
