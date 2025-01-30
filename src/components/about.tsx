"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaCheck, FaDownload, FaSpinner } from "react-icons/fa";
import { motion } from "framer-motion";

export function About() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    setIsDownloaded(false);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsDownloading(false);
    setIsDownloaded(true);
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="py-20">
      <div className="flex flex-col items-center lg:items-center lg:justify-center lg:flex-row md:gap-20 lg:gap-36 text-justify">
        <motion.div
          className="flex flex-col items-center gap-5 mx-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textVariants}
          transition={{ duration: 0.8, ease: "easeOut" }} 
        >
          <div className="flex items-center gap-3">
            <h3 className=" text-4xl font-bold">Olá! sou Carlos Vítor</h3>
            <Image
              src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
              width={300}
              height={300}
              alt="Gif de mão acenando"
              className="max-w-[3rem]"
            />
          </div>
          <p className="max-w-2xl text-gray-800 dark:text-gray-200">
            Um desenvolvedor web full stack com uma paixão imensa pela
            programação, algo que descobri no início da minha jornada e que logo
            percebi ser a carreira dos meus sonhos. Adoro tecnologia e nada me
            satisfaz mais do que criar experiências digitais que sejam tanto
            bonitas quanto funcionais.
          </p>
          <p className="max-w-2xl text-gray-800 dark:text-gray-200">
            Gosto muito de trabalhar em equipe e acredito que a colaboração é a
            chave para alcançar grandes objetivos e criar soluções inovadoras.
            Tenho facilidade em aprender coisas novas e estou sempre disposto a
            enfrentar novos desafios. Sou ativo e proativo, sempre buscando
            fazer o meu melhor em qualquer tarefa.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <Link
              href="https://docs.google.com/document/d/1QHNNyBLFNnG39P8cFgwXYKPAxyUXvwOw/export?format=pdf"
              download
              onClick={handleDownload}
              className="border-[2.7px] border-[#000000] hover:bg-[#000000] hover:shadow-shadow-light dark:border-[#FFF] hover:dark:bg-[#FFF] dark:hover:shadow-dark-shadow inline-flex items-center px-6 py-3 hover:text-white text-[#000000] hover:dark:text-black dark:text-[#FFF] font-semibold rounded-lg shadow-md transition duration-300"
            >
              Baixar Currículo
              <div className="ml-2">
                {isDownloading ? (
                  <FaSpinner className="animate-spin" />
                ) : isDownloaded ? (
                  <FaCheck />
                ) : (
                  <FaDownload />
                )}
              </div>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="gradient-background dark:bg-gradient-to-r dark:from-[#081c8d] dark:to-[#000000] rounded-full mt-6 max-w-[370px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/foto-perfil.png"
            alt="Foto de Carlos Vítor"
            width={600}
            height={600}
            className="rounded-full max-w-[300px] md:max-w-[350px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
