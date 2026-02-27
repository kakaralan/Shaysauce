import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Shay's Sauce - Handcrafted Hot Sauce",
  description: 'Small batch. Big taste. One perfect sauce.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
