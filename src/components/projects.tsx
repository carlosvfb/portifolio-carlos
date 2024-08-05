'use client';

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";
import { IoCodeSlash, IoLogoVercel } from "react-icons/io5";
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
    const plugin = React.useRef(
         Autoplay({ delay: 4000 })
        );
    return (
        <section className="p-20">
          <h2 className="text-4xl font-bold text-center mb-8">Projetos</h2>
          <div className="w-full flex justify-center">
            <Carousel
              className="w-full max-w-md"
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
            <CarouselContent>
              {projects.map((project, index) => (
                  <CarouselItem key={index}>
                    <div className="px-9">
                        <Card className="max-w-96">
                            <CardContent className="relative p-6 bg-white dark:bg-gray-700 rounded-lg flex flex-col gap-5">
                                <h3 className="text-2xl font-bold text-center">{project.title}</h3>
                                <Image className="rounded-lg h-[550px]" src={project.image} alt={project.title} width={900} height={300}/>
                                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                                <div className="flex justify-between">
                                  <button className="bg-gray-400 text-black  dark:text-white text-xl p-1 font-bold py-2 px-4 rounded dark:bg-black flex items-center gap-2 hover:scale-2"  onClick={() => window.open(project.demoLink, '_blank')}>Projeto <IoLogoVercel /></button>
                                  <button className="bg-gray-400 dark:text-white text-black text-xl font-bold py-2 px-4 rounded dark:bg-black flex items-center gap-2 hover:scale-2" onClick={() => window.open(project.codeLink, '_blank')}>Repositório <FaGithub /></button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                  </CarouselItem>
              ))}
              </CarouselContent>
              <CarouselPrevious className="absolute -left-4 top-1/2 transform -translate-y-1/2" />
              <CarouselNext className="absolute -right-4 top-1/2 transform -translate-y-1/2" />
            </Carousel>
          </div>
        </section>
      );
    }