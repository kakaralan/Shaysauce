import { Card } from '@/components/ui/card';

export default function ProductGallery() {
  return (
    <div>
      <h3 className="text-3xl font-bold text-center mb-8">Gallery</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} className="overflow-hidden aspect-square">
            <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
              <span className="text-muted-foreground">Image Coming Soon</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
