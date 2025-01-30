"use client";

import Image from "next/image";
import { badgeColors } from "./badge-colors";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { motion } from "framer-motion";

interface Certification {
  title: string;
  institution: string;
  status: "completed" | "inProgress" | string;
  certificateLink?: string;
  image: string;
  badges: string[];
}
interface CertificationProps {
  certifications: Certification[];
}
export function Certifications({ certifications }: CertificationProps) {
  return (
    <section className="p-20">
      <motion.div className="text-center mb-12" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h2 className="text-3xl font-bold">Meus Certificados</h2>
        <p className="text-gray-600 dark:text-gray-300">
        Confira alguns dos certificados que conquistei ao longo da minha jornada.
        </p>
      </motion.div>
      <div className="flex flex-wrap gap-8 justify-center">
        {certifications.map((cert, index) => (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
            key={index}
            className="flex flex-col gap-4 md:flex-col items-center justify-between p-6 border border-gray-300 dark:border-gray-700 w-full max-w-md rounded-lg shadow-sm bg-white dark:bg-gray-700"
          >
            <div className="flex flex-col items-center">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                {cert.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {cert.institution}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Image
                src={cert.image}
                alt={cert.title}
                className="w-full object-cover rounded-lg mr-4"
                width={800}
                height={800}
              />
              <div className="mt-2 flex flex-wrap gap-2">
                {cert.badges.map((badge, i) => (
                  <Badge
                    key={i}
                    className={`text-sm font-semibold px-3 py-1 ${
                      badgeColors[badge] ||
                      "bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-200"
                    }`}
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="mt-4">
              {cert.status === "completed" ? (
                <Link
                  href={cert.certificateLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-[2.7px] border-[#000000] hover:bg-[#000000] hover:shadow-shadow-light dark:border-[#FFF] hover:dark:bg-[#FFF] dark:hover:shadow-dark-shadow inline-flex items-center px-6 py-3 hover:text-white text-[#000000] hover:dark:text-black dark:text-[#FFF] font-semibold rounded-lg shadow-md transition duration-300"
                >
                  Ver Certificado
                </Link>
              ) : (
                <Link
                  href="/certifications"
                  rel="noopener noreferrer"
                  className="border-[2.7px] border-[#000000] hover:bg-[#000000] hover:shadow-shadow-light dark:border-[#FFF] hover:dark:bg-[#FFF] dark:hover:shadow-dark-shadow inline-flex items-center px-6 py-3 hover:text-white text-[#000000] hover:dark:text-black dark:text-[#FFF] font-semibold rounded-lg shadow-md transition duration-300"
                >
                  Em andamento...
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
