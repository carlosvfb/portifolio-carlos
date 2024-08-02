import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
export function About() {
    return (
      <section className="py-20">
            <h2 className="text-4xl font-bold text-center mb-8 ">Sobre Mim</h2>
        <div className="flex items-center justify-center gap-40">
          <div className="flex flex-col space-x-4 mt-4">
            <p className="text-center max-w-xl text-gray-800 dark:text-gray-200">Breve biografia sobre você, suas paixões e o que você faz.</p>
            <ul className="flex justify-center space-x-4 mt-4">
            <li className="border border-2 border-[#000000] rounded-full hover:bg-[#000000] hover:shadow-shadow-light dark:border-[#FFF] hover:dark:bg-[#FFF] dark:hover:shadow-dark-shadow" >
              <a href=""><FaGithub className="text-5xl p-2 hover:text-white text-[#000000] hover:dark:text-black dark:text-[#FFF]" /></a>
            </li>
            <li className="border border-2 border-[#000000] rounded-full hover:bg-[#000000] hover:shadow-shadow-light dark:border-[#FFF] hover:dark:bg-[#FFF] dark:hover:shadow-dark-shadow">
              <a href=""><FaInstagram className="text-5xl p-2 hover:text-white text-[#000000] hover:dark:text-black dark:text-[#FFF]" /></a>
            </li>
            <li className="border border-2 border-[#000000] rounded-full hover:bg-[#000000] hover:shadow-shadow-light dark:border-[#FFF] hover:dark:bg-[#FFF] dark:hover:shadow-dark-shadow">
              <a href=""><FaLinkedin className="text-5xl p-2 hover:text-white text-[#000000] hover:dark:text-black dark:text-[#FFF]" /></a>
            </li>
            <li className="border border-2 border-[#000000] rounded-full hover:bg-[#000000] hover:shadow-shadow-light dark:border-[#FFF] hover:dark:bg-[#FFF] dark:hover:shadow-dark-shadow">
              <a href=""><FaWhatsapp className="text-5xl p-2 hover:text-white text-[#000000] hover:dark:text-black dark:text-[#FFF]" /></a>
            </li>
          </ul>
          </div>
          <div className="gradient-background dark:bg-gradient-to-r dark:from-[#081c8d] dark:to-[#000000] rounded-full">
            <Image src="/foto-perfil.png" alt="Foto de Carlos Vítor" width={600} height={600} className="w-96 h-96 rounded-full" />
          </div>
        </div>
      </section>
    );
  }
  