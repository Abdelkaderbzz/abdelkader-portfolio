import Link from 'next/link';

export const metadata = {
  title: 'Page not found',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="font-display text-4xl mb-4">404</h1>
        <p className="text-muted-foreground mb-4">Oops! Page not found</p>
        <Link href="/" className="text-brand underline hover:opacity-80">
          Return to Home
        </Link>
      </div>
    </div>
  );
}
