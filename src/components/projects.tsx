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
                                <Image className="rounded-lg h-[550px] cursor-pointer hover:scale-2" src={project.image} alt={project.title} width={900} height={300} onClick={() => window.open(project.demoLink, '_blank')}/>
                                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                                <button className="bg-gray-600 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded">Ver código</button>
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