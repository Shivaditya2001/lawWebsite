import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import { Toaster } from 'react-hot-toast';
import './globals.css';

export const metadata = {
  title: 'Anand Law LLP',
  description: 'Professional Legal Services',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
