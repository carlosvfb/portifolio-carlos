import Link from "next/link";

export function Navbar() {
    return (
        <nav>
            <ul className="flex flex-col items-center gap-2 md:flex-row md:gap-1">
              <li>
                <Link href="/about" className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-foreground/90 transition hover:bg-surface-2 hover:text-foreground">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/skills" className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-foreground/90 transition hover:bg-surface-2 hover:text-foreground">
                  Habilidades
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-foreground/90 transition hover:bg-surface-2 hover:text-foreground">
                  Certificados
                </Link>
              </li>
              <li>
                <Link href="/projects" className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-foreground/90 transition hover:bg-surface-2 hover:text-foreground">
                  Projetos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-foreground/90 transition hover:bg-surface-2 hover:text-foreground">
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
    )
}
