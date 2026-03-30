"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaCheck, FaDownload, FaSpinner } from "react-icons/fa";
import { motion } from "framer-motion";

export function About() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const pathname = usePathname();
  const showExtended = pathname === "/about";

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
      <div className="container">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <motion.div
          className="lg:col-span-7 flex flex-col gap-6 text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textVariants}
          transition={{ duration: 0.8, ease: "easeOut" }} 
        >
          <div className="flex items-center gap-3">
            <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Olá! sou Carlos Vítor
            </h2>
            <Image
              src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
              width={300}
              height={300}
              alt="Gif de mão acenando"
              className="max-w-[3rem]"
            />
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            Um desenvolvedor web full stack com uma paixão imensa pela
            programação, algo que descobri no início da minha jornada e que logo
            percebi ser a carreira dos meus sonhos. Adoro tecnologia e nada me
            satisfaz mais do que criar experiências digitais que sejam tanto
            bonitas quanto funcionais.
          </p>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            Gosto muito de trabalhar em equipe e acredito que a colaboração é a
            chave para alcançar grandes objetivos e criar soluções inovadoras.
            Tenho facilidade em aprender coisas novas e estou sempre disposto a
            enfrentar novos desafios. Sou ativo e proativo, sempre buscando
            fazer o meu melhor em qualquer tarefa.
          </p>

          <div className="grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-xl bg-surface-2/50 ring-1 ring-outline-variant/40 p-4">
              <p className="text-xs font-semibold text-muted-foreground">Atuação</p>
              <p className="mt-1 text-sm font-extrabold text-foreground">Full Stack</p>
            </div>
            <div className="rounded-xl bg-surface-2/50 ring-1 ring-outline-variant/40 p-4">
              <p className="text-xs font-semibold text-muted-foreground">Foco</p>
              <p className="mt-1 text-sm font-extrabold text-foreground">UI & Performance</p>
            </div>
            <div className="rounded-xl bg-surface-2/50 ring-1 ring-outline-variant/40 p-4">
              <p className="text-xs font-semibold text-muted-foreground">Entrega</p>
              <p className="mt-1 text-sm font-extrabold text-foreground">Boas práticas</p>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-4">
            <Link
              href="https://docs.google.com/document/d/1_hRO99xD1uiZYt6Zmpf2yj1Fepnvso1zjtgyw-tNtPg/export?format=pdf"
              download
              onClick={handleDownload}
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_18px_45px_-28px_rgba(0,82,255,0.65)] transition hover:brightness-110 active:scale-[0.99]"
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
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-full bg-surface-2/60 px-6 py-3 text-sm font-semibold text-foreground ring-1 ring-outline-variant/50 transition hover:bg-surface-3/60 active:scale-[0.99]"
            >
              Ver Projetos
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="lg:col-span-5 flex justify-center lg:justify-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-[280px] sm:w-[340px] aspect-square rounded-full bg-surface-2/50 p-3 ring-1 ring-outline-variant/40">
            <div aria-hidden className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_20%,rgba(183,196,255,0.35),transparent_55%),radial-gradient(circle_at_70%_75%,rgba(0,82,255,0.30),transparent_55%)] blur-2xl" />
            <div className="relative h-full w-full overflow-hidden rounded-full ring-1 ring-outline-variant/30">
              <Image
                src="/foto-perfil.png"
                alt="Foto de Carlos Vítor"
                fill
                sizes="(max-width: 640px) 280px, 340px"
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
      {showExtended && (
        <div className="mt-16 space-y-10">
          <div className="rounded-3xl bg-surface-1/60 backdrop-blur-sm ring-1 ring-outline-variant/40 p-8 sm:p-10">
            <h3 className="text-2xl font-extrabold tracking-tight text-foreground">Trajetória</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Um resumo objetivo do meu caminho até aqui e do que priorizo na construção de produtos.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4">
              {[
                {
                  title: "Formação Full Stack",
                  description: "Trilhas completas com foco em fundamentos sólidos, arquitetura e entrega de produto.",
                },
                {
                  title: "Projetos reais",
                  description: "Implementações com stack moderna, UI refinada e atenção a performance e DX.",
                },
                {
                  title: "Evolução contínua",
                  description: "Aprendizado constante com objetivos claros: mais qualidade, menos fricção, mais impacto.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl bg-surface-2/60 ring-1 ring-outline-variant/40 p-6">
                  <p className="text-sm font-extrabold text-foreground">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-surface-1/60 backdrop-blur-sm ring-1 ring-outline-variant/40 p-8 sm:p-10">
            <h3 className="text-2xl font-extrabold tracking-tight text-foreground">Como eu trabalho</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Princípios que uso para manter consistência, velocidade e qualidade nas entregas.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Colaboração", description: "Comunicação objetiva e parceria com o time." },
                { title: "Qualidade", description: "Padrões, testes quando necessário e atenção ao detalhe." },
                { title: "Transparência", description: "Status claro, trade-offs explícitos e alinhamento constante." },
                { title: "Entrega", description: "Foco em impacto: do design ao deploy com responsabilidade." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl bg-surface-2/60 ring-1 ring-outline-variant/40 p-6">
                  <p className="text-sm font-extrabold text-foreground">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      </div>
    </section>
  );
}
