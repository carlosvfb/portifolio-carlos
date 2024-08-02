'use client';

import Image from "next/image";
import {
  Card,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"


interface Skills {
  title: string;
  image: string;
  description: string;
  documentationLink: string;
}

interface SkillsProps {
  skills: Skills[];
}

export function Skills({ skills }: SkillsProps ) {
    return (
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center mb-8">Habilidades</h2>
        <div className="flex flex-wrap justify-center gap-8 px-6" >
          {skills.map((skill, index) => (
              <Card key={index} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md cursor-pointer hover:scale-105 flex flex-col items-center gap-4 max-w-xs w-full" onClick={() => window.open(skill.documentationLink, '_blank')}>   
                <CardTitle className="text-2xl font-bold">{skill.title}</CardTitle>
                <Image src={skill.image} alt={skill.title} width={100} height={100}/>
                <CardDescription className="text-base font-semibold text-gray-700 dark:text-gray-300 break-words text-justify">{skill.description}</CardDescription>
              </Card>
          ))}
        </div>
      </section>
    );
  }