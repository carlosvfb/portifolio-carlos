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
          Um desenvolvedor web front-end com uma paixão imensa pela programação, algo que descobri no início da minha jornada e que logo percebi ser a carreira dos meus sonhos. Adoro tecnologia e nada me satisfaz mais do que criar experiências digitais que sejam tanto bonitas quanto funcionais.  
          </p>
          <p className="max-w-2xl ml-16 text-gray-800 dark:text-gray-200">
          Gosto muito de trabalhar em equipe e acredito que a colaboração é a chave para alcançar grandes objetivos e criar soluções inovadoras. Tenho facilidade em aprender coisas novas e estou sempre disposto a enfrentar novos desafios. Sou ativo e proativo, sempre buscando fazer o meu melhor em qualquer tarefa.
          </p>
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
