"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { badgeColors } from "./badge-colors";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

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
  const [activeFilter, setActiveFilter] = useState<"all" | "frontend" | "backend" | "cloud">("all");
  const [query, setQuery] = useState("");

  const filteredCertifications = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const classify = (cert: Certification) => {
      const tokens = cert.badges.map((b) => b.toLowerCase());
      const frontend = ["react", "next.js", "javascript", "typescript", "html", "css", "tailwind", "bootstrap", "jquery"].some((t) =>
        tokens.includes(t)
      );
      const backend = ["nodejs", "node.js", "node", "express", "apis", "postgresql", "mysql", "php"].some((t) => tokens.includes(t));
      const cloud = [
        "docker",
        "aws",
        "gcp",
        "google cloud",
        "kubernetes",
        "devops",
        "vercel",
        "azure",
        "windows server",
        "linux",
        "mikrotik",
        "firewall",
        "redes",
        "backup",
        "pentest",
      ].some((t) => tokens.includes(t));

      return { frontend, backend, cloud };
    };

    return certifications.filter((cert) => {
      const haystack = `${cert.title} ${cert.institution} ${cert.badges.join(" ")}`.toLowerCase();
      if (normalizedQuery && !haystack.includes(normalizedQuery)) return false;

      const categories = classify(cert);
      if (activeFilter === "all") return true;
      if (activeFilter === "frontend") return categories.frontend;
      if (activeFilter === "backend") return categories.backend;
      return categories.cloud;
    });
  }, [activeFilter, certifications, query]);

  return (
    <section className="py-20">
      <div className="container px-6 max-w-6xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Meus Certificados
          </h2>
          <p className="text-muted-foreground">
            Certificações e trilhas que fazem parte da minha evolução profissional.
          </p>
        </motion.div>

        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className={`rounded-full px-4 py-2 text-xs font-semibold ring-1 transition ${
                activeFilter === "all"
                  ? "bg-primary text-primary-foreground ring-primary/40"
                  : "bg-surface-2/60 text-foreground ring-outline-variant/40 hover:bg-surface-3/60"
              }`}
            >
              Todos
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("frontend")}
              className={`rounded-full px-4 py-2 text-xs font-semibold ring-1 transition ${
                activeFilter === "frontend"
                  ? "bg-primary text-primary-foreground ring-primary/40"
                  : "bg-surface-2/60 text-foreground ring-outline-variant/40 hover:bg-surface-3/60"
              }`}
            >
              Frontend
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("backend")}
              className={`rounded-full px-4 py-2 text-xs font-semibold ring-1 transition ${
                activeFilter === "backend"
                  ? "bg-primary text-primary-foreground ring-primary/40"
                  : "bg-surface-2/60 text-foreground ring-outline-variant/40 hover:bg-surface-3/60"
              }`}
            >
              Backend
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("cloud")}
              className={`rounded-full px-4 py-2 text-xs font-semibold ring-1 transition ${
                activeFilter === "cloud"
                  ? "bg-primary text-primary-foreground ring-primary/40"
                  : "bg-surface-2/60 text-foreground ring-outline-variant/40 hover:bg-surface-3/60"
              }`}
            >
              Cloud/DevOps
            </button>
          </div>

          <div className="w-full md:max-w-sm">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar certificado..."
              className="bg-surface-2/60 border-outline-variant/50"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
          {filteredCertifications.map((cert, index) => (
            <motion.article
              key={index}
              className="h-full w-full max-w-[540px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-full rounded-2xl bg-surface-2/60 backdrop-blur-sm ring-1 ring-outline-variant/40 shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1 overflow-hidden flex flex-col">
                <div className="p-6 pb-4 flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h4 className="text-lg sm:text-xl font-bold text-foreground">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {cert.institution}
                    </p>
                  </div>
                  <Badge
                    className={
                      cert.status === "completed"
                        ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200"
                        : "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200"
                    }
                  >
                    {cert.status === "completed" ? "Concluído" : "Em andamento"}
                  </Badge>
                </div>

                <div className="px-6">
                  <div className="w-full rounded-xl overflow-hidden ring-1 ring-outline-variant/40 bg-surface-3/50">
                    <div className="relative w-full aspect-[4/3] sm:aspect-[16/10]">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-contain p-2 sm:p-3"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-4 flex flex-col gap-5 flex-1">
                  <div className="flex flex-wrap gap-2">
                    {cert.badges.map((badge, i) => (
                      <Badge
                        key={i}
                        className={`text-xs font-semibold px-2.5 py-1 ${
                          badgeColors[badge] ||
                          "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                        }`}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-auto">
                    {cert.status === "completed" && cert.certificateLink ? (
                      <Button
                        asChild
                        className="w-full bg-primary text-primary-foreground font-semibold hover:brightness-110"
                      >
                        <a href={cert.certificateLink} target="_blank" rel="noreferrer">
                          Ver certificado
                        </a>
                      </Button>
                    ) : (
                      <Button
                        disabled
                        className="w-full bg-surface-3/60 text-muted-foreground"
                      >
                        Em andamento
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
