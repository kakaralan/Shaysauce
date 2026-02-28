import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function BrandStory() {
  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-3xl">Our Story</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-lg mx-auto">
          <p className="text-center text-muted-foreground">
            Every bottle of Shay's Sauce is crafted with passion and precision.
            We believe great hot sauce should enhance your food, not overpower it.
            That's why we carefully balance heat with flavor, using only the finest
            ingredients to create a sauce that's as versatile as it is delicious.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
