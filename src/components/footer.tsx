import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

export function Footer() {
    return (
      <footer className="border-t border-outline-variant/40 bg-surface/50">
        <div className="container flex flex-col gap-5 py-8 text-center">
          <p className="text-sm font-semibold text-muted-foreground">
            &copy; {new Date().getFullYear()} Carlos Vítor. Todos os direitos reservados.
          </p>
          <ul className="flex justify-center gap-3">
            <li>
              <a
                href="https://github.com/carlosvfb"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-surface-2/60 ring-1 ring-outline-variant/40 transition hover:bg-surface-3/70 hover:ring-outline-variant/60"
              >
                <FaGithub className="text-2xl text-foreground" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/_.carlosvfb._"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-surface-2/60 ring-1 ring-outline-variant/40 transition hover:bg-surface-3/70 hover:ring-outline-variant/60"
              >
                <FaInstagram className="text-2xl text-foreground" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/carlos-v%C3%ADtor-faria-barboza?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BTAXLngDWRc%2B0dl5fPB0aAA%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-surface-2/60 ring-1 ring-outline-variant/40 transition hover:bg-surface-3/70 hover:ring-outline-variant/60"
              >
                <FaLinkedin className="text-2xl text-foreground" />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/5561999607934"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-surface-2/60 ring-1 ring-outline-variant/40 transition hover:bg-surface-3/70 hover:ring-outline-variant/60"
              >
                <FaWhatsapp className="text-2xl text-foreground" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  };
  
