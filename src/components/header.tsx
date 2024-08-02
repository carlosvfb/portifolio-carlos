'use client';

import Link from "next/link";
import { ModeToggle } from "./toggle-theme";

export function Header() {
    return (
      <header className="bg-transparent border-b-[1px] border-black  text-black dark:text-white dark:border-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex flex-col">
            <h1 className="text-2xl font-bold">Carlos Vítor</h1>
            <p className="text-sm font-semibold">Portifólio profissional</p>
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/about" className="hover:underline font-semibold">Sobre</Link>
              </li>
              <li>
                <Link href="/skills" className="hover:underline font-semibold">Habilidades</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:underline font-semibold">Projetos</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline font-semibold">Contato</Link>
              </li>
            </ul>
          </nav>
          <ModeToggle />
        </div>
      </header>
    );
  }
  