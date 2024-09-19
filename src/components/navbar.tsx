import Link from "next/link";

export function Navbar() {
    return (
        <nav>
            <ul className="flex space-x-4 text-dark dark:text-white flex-col items-center gap-4 my-4 md:flex-row">
              <li>
                <Link href="/about" className="hover:underline font-semibold ml-3">Sobre</Link>
              </li>
              <li>
                <Link href="/skills" className="hover:underline font-semibold text-center">Habilidades</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:underline font-semibold">Projetos</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline font-semibold">Contato</Link>
              </li>
            </ul>
          </nav>
    )
}