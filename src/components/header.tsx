'use client';

import Link from "next/link";
import { ModeToggle } from "./toggle-theme";
import { Navbar } from "./navbar";
import { DrawerDemo } from "./drawer-menu";

export function Header() {
    return (
      <header className="bg-transparent border-b-[1px] border-black  text-black dark:text-white dark:border-white py-4 px-0">
        <div className="container flex justify-between items-center">
          <Link href="#" className="flex flex-col">
            <h1 className="text-2xl font-bold">Carlos Vítor</h1>
            <p className="text-sm font-semibold">Portifólio profissional</p>
          </Link>
          <div className="hidden md:block">
            <Navbar />
          </div>
          <div >
            <ModeToggle />
            <DrawerDemo />
          </div>
        </div>
      </header>
    );
  }
  