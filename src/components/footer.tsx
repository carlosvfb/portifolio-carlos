import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

export function Footer() {
    return (
      <footer className="bg-transparent border-t-[1px] border-black dark:border-white text-black dark:text-white font-semibold p-4">
        <div className="container mx-auto text-center flex flex-col gap-4">
          <p>&copy; {new Date().getFullYear()} Carlos Vítor. Todos os direitos reservados.</p>
          <ul className="flex justify-center space-x-3">
            <li className="border-2 border-[#000000] rounded-full hover:bg-[#000000] hover:shadow-shadow-light dark:border-[#FFF] hover:dark:bg-[#FFF] dark:hover:shadow-dark-shadow">
              <a href="https://github.com/carlosvfb">
                <FaGithub className="text-4xl p-2 hover:text-white text-[#000000] hover:dark:text-black dark:text-[#FFF]" />
              </a>
            </li>
            <li className="border-2 border-[#000000] rounded-full hover:bg-[#000000] hover:shadow-shadow-light dark:border-[#FFF] hover:dark:bg-[#FFF] dark:hover:shadow-dark-shadow">
              <a href="https://www.instagram.com/_.carlosvfb._">
                <FaInstagram className="text-4xl p-2 hover:text-white text-[#000000] hover:dark:text-black dark:text-[#FFF]" />
              </a>
            </li>
            <li className="border-2 border-[#000000] rounded-full hover:bg-[#000000] hover:shadow-shadow-light dark:border-[#FFF] hover:dark:bg-[#FFF] dark:hover:shadow-dark-shadow">
              <a href="https://www.linkedin.com/in/carlos-v%C3%ADtor-faria-barboza?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BTAXLngDWRc%2B0dl5fPB0aAA%3D%3D">
                <FaLinkedin className="text-4xl p-2 hover:text-white text-[#000000] hover:dark:text-black dark:text-[#FFF]" />
              </a>
            </li>
            <li className="border-2 border-[#000000] rounded-full hover:bg-[#000000] hover:shadow-shadow-light dark:border-[#FFF] hover:dark:bg-[#FFF] dark:hover:shadow-dark-shadow">
              <a href="https://wa.me/5561999607934">
                <FaWhatsapp className="text-4xl p-2 hover:text-white text-[#000000] hover:dark:text-black dark:text-[#FFF]" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  };
  