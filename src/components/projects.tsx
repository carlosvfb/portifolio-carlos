"use client";

import { CardContent } from "@/components/ui/card";
import { IoLogoVercel } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { ImageWithHover } from "./imageHover";

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
  return (
    <section className="py-20 px-6 md:px-20">
      <motion.div className="text-center mb-12" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h2 className="text-3xl font-bold">Meus Projetos</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Explore alguns dos projetos que desenvolvi.
        </p>
      </motion.div>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <motion.div key={index} className="shadow-md hover:shadow-lg max-w-lg w-full transition" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <CardContent className="relative bg-white dark:bg-gray-700 rounded-lg flex flex-col gap-5 p-5 ">
              <h3 className="text-xl font-bold text-center sm:text-2xl">
                {project.title}
              </h3>
              <ImageWithHover preview={project.previewImage} gif={project.previewGif} />
              <p className="text-gray-600 dark:text-gray-300 text-justify">
                {project.description}
              </p>
              <div className="flex flex-col gap-3 sm:justify-between sm:flex-row">
                <button
                  className="bg-gray-400 text-black dark:text-white text-xl font-bold py-2 px-4 rounded dark:bg-black flex items-center gap-2 justify-center hover:scale-105"
                  onClick={() => window.open(project.demoLink, "_blank")}
                >
                  Projeto <IoLogoVercel />
                </button>
                <button
                  className="bg-gray-400 dark:text-white text-black text-xl font-bold py-2 px-4 rounded dark:bg-black flex items-center gap-2 justify-center hover:scale-105"
                  onClick={() => window.open(project.codeLink, "_blank")}
                >
                  Repositório <FaGithub />
                </button>
              </div>
            </CardContent>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

