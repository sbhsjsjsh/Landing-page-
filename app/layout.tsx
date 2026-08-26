import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Find your dream home',
  description: 'A clean, modern landing page for Indian real estate featuring a headline, sub-headline, and bullet points.',
  openGraph: {
    title: 'Find your dream home',
    description: 'A clean, modern landing page for Indian real estate featuring a headline, sub-headline, and bullet points.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Find your dream home',
    description: 'A clean, modern landing page for Indian real estate featuring a headline, sub-headline, and bullet points.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
