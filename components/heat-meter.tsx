import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export default function HeatMeter() {
  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Heat Level</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Progress value={60} className="h-8" />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Mild</span>
          <span>Medium</span>
          <span>Hot</span>
          <span>Extreme</span>
        </div>
        <p className="text-center font-semibold">
          Medium Heat - Perfect balance of flavor and fire
        </p>
      </CardContent>
    </Card>
  );
}
