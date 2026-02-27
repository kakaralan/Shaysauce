import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function CancelPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-muted/30 to-background p-4">
      <Card className="max-w-2xl w-full">
        <CardHeader className="text-center">
          <div className="text-6xl mb-4">😔</div>
          <CardTitle className="text-3xl">Order Cancelled</CardTitle>
          <CardDescription>Your order was not completed.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <AlertDescription>
              No charges were made to your account. Feel free to try again when you're ready!
            </AlertDescription>
          </Alert>
          <Button asChild className="w-full">
            <Link href="/">Back to Home</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
