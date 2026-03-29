'use client';

import Link from "next/link";
import { ModeToggle } from "./toggle-theme";
import { Navbar } from "./navbar";
import { DrawerDemo } from "./drawer-menu";

export function Header() {
    return (
      <header className="fixed inset-x-0 top-0 z-50 border-b border-outline-variant/40 bg-surface/70 backdrop-blur-xl">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="flex flex-col leading-tight">
            <h1 className="text-xl font-extrabold tracking-tight text-foreground">Carlos Vítor</h1>
            <p className="text-xs font-semibold text-muted-foreground">Portfólio profissional</p>
          </Link>
          <div className="hidden md:block">
            <Navbar />
          </div>
          <div className="flex items-center gap-2">
            <ModeToggle />
            <DrawerDemo />
          </div>
        </div>
      </header>
    );
  }
  
