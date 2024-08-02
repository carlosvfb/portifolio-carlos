'use client';

import { ReactNode } from 'react';
import { Header } from './header';
import { Footer } from './footer';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {

  return (
    <div className="flex flex-col min-h-screen bg-custom-gradient-light text-black dark:bg-custom-gradient-dark dark:text-white">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
