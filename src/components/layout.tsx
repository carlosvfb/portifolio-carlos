'use client';

import { ReactNode } from 'react';
import { Header } from './header';
import { Footer } from './footer';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {

  return (
    <div className="relative flex min-h-screen flex-col bg-surface text-foreground overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-52 left-1/2 h-[720px] w-[920px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,82,255,0.22),transparent_60%)] blur-3xl" />
        <div className="absolute -left-64 top-28 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(183,196,255,0.18),transparent_62%)] blur-3xl" />
        <div className="absolute -right-72 bottom-0 h-[640px] w-[640px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,31,112,0.35),transparent_60%)] blur-3xl" />
      </div>
      <Header />
      <main className="flex-grow pt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
}
