'use client';

import Image from "next/image";
import {
  CardTitle,
} from "@/components/ui/card"
import { motion } from "framer-motion";


interface Skill {
  title: string;
  image: string;
  items: string[];
}

interface SkillsProps {
  skills: Skill[];
}

export function Skills({ skills }: SkillsProps ) {
    return (
      <section className="py-20">
        <div className="container px-6">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Minhas Habilidades
            </h2>
            <p className="text-muted-foreground">Conhecimentos principais, apresentados de forma objetiva.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="group rounded-2xl shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                <div className="rounded-2xl bg-surface-2/60 backdrop-blur-sm ring-1 ring-outline-variant/40 p-6 flex flex-col items-center gap-4 transition hover:ring-outline-variant/70">
                  <CardTitle className="text-xl font-bold text-foreground">{skill.title}</CardTitle>
                  <Image src={skill.image} alt={skill.title} width={80} height={80} className="drop-shadow-md" />
                  <div className={`w-full ${skill.items.length > 4 ? "grid grid-cols-2 gap-x-8" : ""}`}>
                    <ul className="w-full list-disc list-outside pl-5 text-sm font-semibold leading-6 text-foreground/90 marker:text-primary space-y-1">
                      {skill.items.slice(0, 4).map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                    {skill.items.length > 4 && (
                      <ul className="w-full list-disc list-outside pl-5 text-sm font-semibold leading-6 text-foreground/90 marker:text-primary space-y-1">
                        {skill.items.slice(4).map((item, itemIndex) => (
                          <li key={`more-${itemIndex}`}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }
