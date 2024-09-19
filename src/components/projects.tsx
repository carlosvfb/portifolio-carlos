"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IoLogoVercel } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  image: string;
  codeLink: string;
  demoLink: string;
}

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section className="py-20 md:p-20">
      <div className="w-full flex justify-center">
        <Carousel className="w-full max-w-md">
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index}>
                <div className="px-9">
                  <Card className="max-w-[450px]">
                    <CardContent className="relative bg-white dark:bg-gray-700 rounded-lg flex flex-col gap-5 p-3 sm:p-5">
                      <h3 className="text-xl font-bold text-center sm:text-2xl">
                        {project.title}
                      </h3>
                      <iframe
                        src={project.demoLink}
                        title={`Demo do ${project.title}`}
                        className="h-[550px] no-scrollbar"
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                      <p className="text-gray-600 dark:text-gray-300 text-justify">
                        {project.description}
                      </p>
                      <div className="flex flex-col gap-3 sm:justify-between sm:flex-row">
                        <button
                          className="bg-gray-400 text-black  dark:text-white text-xl font-bold py-2 px-4 rounded dark:bg-black flex items-center gap-2 justify-center hover:scale-2"
                          onClick={() =>
                            window.open(project.demoLink, "_blank")
                          }
                        >
                          Projeto <IoLogoVercel />
                        </button>
                        <button
                          className="bg-gray-400 dark:text-white text-black text-xl font-bold py-2 px-4 rounded dark:bg-black flex items-center gap-2 justify-center hover:scale-2 "
                          onClick={() =>
                            window.open(project.codeLink, "_blank")
                          }
                        >
                          Repositório <FaGithub />
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex absolute -left-1 top-1/2 transform -translate-y-1/2" />
          <CarouselNext className="hidden md:flex absolute -right-1 top-1/2 transform -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  );
}
