"use client";

import { useEffect, useState } from "react";
import { IoLogoVercel } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { ImageWithHover } from "./imageHover";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface Project {
  title: string;
  description: string;
  previewImage: string;
  previewGif: string;
  codeLink: string;
  demoLink: string;
}

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const showPrivateRepoAlert = () => {
    setAlertMessage("Para a segurança do cliente deixamos o repositório privado para não clonarem o projeto dele.");
    setShowAlert(true);
  };

  useEffect(() => {
    if (!showAlert) return;
    const id = window.setTimeout(() => setShowAlert(false), 3500);
    return () => window.clearTimeout(id);
  }, [showAlert]);

  const featuredProjects = projects.slice(0, 2);
  const otherProjects = projects.slice(2);

  const renderProjectCard = (project: Project, options?: { frameClassName?: string; titleSize?: string }) => {
    const isPrivateRepo = !project.codeLink || project.codeLink === "#";
    return (
      <div className="h-full rounded-2xl bg-surface-2/60 backdrop-blur-sm ring-1 ring-outline-variant/40 shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1 overflow-hidden flex flex-col">
        <div className="p-6 pb-4 flex flex-col gap-1">
          <h3 className={options?.titleSize ?? "text-xl sm:text-2xl font-bold text-foreground"}>
            {project.title}
          </h3>
          <div className="h-[2px] w-12 bg-primary rounded-full" />
        </div>

        <div className="px-6">
          <ImageWithHover
            preview={project.previewImage}
            gif={project.previewGif}
            alt={`Prévia do projeto ${project.title}`}
            fit="contain"
            frameClassName={options?.frameClassName ?? "aspect-[4/3] sm:aspect-[16/10]"}
          />
        </div>

        <div className="p-6 pt-4 flex flex-col gap-5 flex-1">
          <p className="text-sm leading-relaxed text-muted-foreground text-justify flex-1">
            {project.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              asChild
              className="w-full sm:w-auto bg-primary text-primary-foreground font-semibold hover:brightness-110"
            >
              <a href={project.demoLink} target="_blank" rel="noreferrer">
                Ver projeto <IoLogoVercel className="ml-2" />
              </a>
            </Button>
            {isPrivateRepo ? (
              <Button
                type="button"
                variant="outline"
                className="w-full sm:w-auto border-outline-variant/60 bg-surface-3/30 text-foreground hover:bg-surface-3/60"
                onClick={showPrivateRepoAlert}
              >
                Ver código <FaGithub className="ml-2" />
              </Button>
            ) : (
              <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto border-outline-variant/60 bg-surface-3/30 text-foreground hover:bg-surface-3/60"
              >
                <a href={project.codeLink} target="_blank" rel="noreferrer">
                  Ver código <FaGithub className="ml-2" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20">
      <div className="container px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Meus Projetos
          </h2>
          <p className="text-muted-foreground">
            Projetos selecionados com foco em qualidade, UI e boas práticas.
          </p>
        </motion.div>

        {featuredProjects.length > 0 && (
          <div className="mb-10">
            <div className="mb-5 flex items-end justify-between gap-4">
              <h3 className="text-xl font-extrabold tracking-tight text-foreground">Destaques</h3>
              <p className="text-sm text-muted-foreground">Selecionados para mostrar impacto e qualidade.</p>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
              {featuredProjects[0] && (
                <div className="lg:col-span-7">
                  {renderProjectCard(featuredProjects[0], { frameClassName: "aspect-[16/10]", titleSize: "text-2xl sm:text-3xl font-extrabold text-foreground" })}
                </div>
              )}
              {featuredProjects[1] && (
                <div className="lg:col-span-5 lg:mt-10">
                  {renderProjectCard(featuredProjects[1], { frameClassName: "aspect-[16/10]" })}
                </div>
              )}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.article
              key={`${project.title}-${index}`}
              className="h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              {renderProjectCard(project)}
            </motion.article>
          ))}
        </div>
      </div>
      {showAlert && (
        <div className="fixed bottom-4 right-4 z-50">
          <Alert className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative dark:bg-red-700 dark:border-red-500 dark:text-red-100">
            <AlertTitle>Repositório Privado</AlertTitle>
            <AlertDescription>{alertMessage}</AlertDescription>
          </Alert>
        </div>
      )}
    </section>

  );
}
