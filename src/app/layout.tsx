import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Aamir's Portfolio",
  description: 'A showcase of who I am and my previous work experience',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ height: '100%' }}>
      <body className={`flex ${inter.className} min-h-full bg-black`}>
        {children}
      </body>
    </html>
  );
}
