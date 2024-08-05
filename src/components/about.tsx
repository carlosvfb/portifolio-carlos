import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
export function About() {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center mb-8 ">Sobre Mim</h2>
      <div className="flex items-center justify-center gap-40 text-justify">
        <div className="flex flex-col items-center gap-5">
          <div className="flex items-center gap-3">
            <h3 className=" text-4xl font-bold ml-16">Olá! sou Carlos Vítor</h3>
            <Image
              src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
              width={300}
              height={300}
              alt="Gif de mão acenando"
              className="max-w-[3rem] "
            />
          </div>
          <p className="max-w-2xl ml-16 text-gray-800 dark:text-gray-200">
            Sou um desenvolvedor web front-end com uma paixão inata por
            tecnologia e inovação. Adoro explorar novas ferramentas e técnicas
            para criar experiências digitais que sejam tanto bonitas quanto
            funcionais. Sou uma pessoa curiosa e dedicada, sempre buscando
            aprender e me aperfeiçoar, tanto profissionalmente quanto
            pessoalmente.
          </p>
          <ul className="flex justify-center space-x-4">
            <li className="border border-2 border-[#000000] rounded-full hover:bg-[#000000] hover:shadow-shadow-light dark:border-[#FFF] hover:dark:bg-[#FFF] dark:hover:shadow-dark-shadow">
              <a href="">
                <FaGithub className="text-5xl p-2 hover:text-white text-[#000000] hover:dark:text-black dark:text-[#FFF]" />
              </a>
            </li>
            <li className="border border-2 border-[#000000] rounded-full hover:bg-[#000000] hover:shadow-shadow-light dark:border-[#FFF] hover:dark:bg-[#FFF] dark:hover:shadow-dark-shadow">
              <a href="">
                <FaInstagram className="text-5xl p-2 hover:text-white text-[#000000] hover:dark:text-black dark:text-[#FFF]" />
              </a>
            </li>
            <li className="border border-2 border-[#000000] rounded-full hover:bg-[#000000] hover:shadow-shadow-light dark:border-[#FFF] hover:dark:bg-[#FFF] dark:hover:shadow-dark-shadow">
              <a href="">
                <FaLinkedin className="text-5xl p-2 hover:text-white text-[#000000] hover:dark:text-black dark:text-[#FFF]" />
              </a>
            </li>
            <li className="border border-2 border-[#000000] rounded-full hover:bg-[#000000] hover:shadow-shadow-light dark:border-[#FFF] hover:dark:bg-[#FFF] dark:hover:shadow-dark-shadow">
              <a href="">
                <FaWhatsapp className="text-5xl p-2 hover:text-white text-[#000000] hover:dark:text-black dark:text-[#FFF]" />
              </a>
            </li>
          </ul>
        </div>
        <div className="gradient-background dark:bg-gradient-to-r dark:from-[#081c8d] dark:to-[#000000] rounded-full">
          <Image
            src="/foto-perfil.png"
            alt="Foto de Carlos Vítor"
            width={600}
            height={600}
            className="w-96 h-96 rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
