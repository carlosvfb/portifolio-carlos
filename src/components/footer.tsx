import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

export function Footer() {
    return (
      <footer className="bg-transparent border-t-[1px] border-black dark:border-white text-black dark:text-white font-semibold p-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Carlos Vítor. Todos os direitos reservados.</p>
          <ul className="flex justify-center space-x-4 mt-4">
            <li>
              <a href=""><FaGithub className="text-3xl hover:scale-110" /></a>
            </li>
            <li>
              <a href=""><FaInstagram className="text-3xl hover:scale-110 " /></a>
            </li>
            <li>
              <a href=""><FaLinkedin className="text-3xl hover:scale-110" /></a>
            </li>
            <li>
              <a href=""><FaWhatsapp className="text-3xl hover:scale-110" /></a>
            </li>
          </ul>
        </div>
      </footer>
    );
  };
  