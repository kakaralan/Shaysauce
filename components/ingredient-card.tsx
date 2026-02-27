import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface IngredientCardProps {
  emoji: string;
  title: string;
  description: string;
}

export default function IngredientCard({ emoji, title, description }: IngredientCardProps) {
  return (
    <Card className="text-center hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="text-5xl mb-2">{emoji}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
