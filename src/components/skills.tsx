'use client';

import Image from "next/image";
import {
  Card,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import { motion } from "framer-motion";


interface Skills {
  title: string;
  image: string;
  description: string;
}

interface SkillsProps {
  skills: Skills[];
}

export function Skills({ skills }: SkillsProps ) {
    return (
      <section className="py-20">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl font-bold">Minhas Habilidades</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Descubra as principais habilidades que desenvolvi ao longo da minha trajetória.
          </p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-8 px-6" >
          {skills.map((skill, index) => (
              <motion.div key={index} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:scale-105 flex flex-col items-center gap-4 max-w-xs w-full" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>   
                <CardTitle className="text-2xl font-bold">{skill.title}</CardTitle>
                <Image src={skill.image} alt={skill.title} width={100} height={100}/>
                <CardDescription className="text-base font-semibold text-gray-700 dark:text-gray-300 break-words text-justify">{skill.description}</CardDescription>
              </motion.div>
          ))}
        </div>
      </section>
    );
  }