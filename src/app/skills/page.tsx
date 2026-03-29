import { Skills } from "@/components/skills";
import { Layout } from "@/components/layout";

const skills = [
    {
      title: 'HTML',
      items: [
        'Semântica',
        'Formulários',
        'Acessibilidade',
        'SEO',
        'Tabelas',
        'Links',
      ],
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    },
    {
      title: 'CSS',
      items: [
        'Flexbox',
        'Grid',
        'Responsivo',
        'Animações',
        'Transições',
        'Especificidade',
      ],
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    },
    {
      title: 'JavaScript',
      items: [
        'DOM',
        'Async/Await',
        'Fetch',
        'Arrays/Objetos',
        'ES6+',
        'Eventos',
      ],
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    },
    {
      title: 'TypeScript',
      items: [
        'Tipos',
        'Interfaces',
        'Narrowing',
        'Generics',
        'Enums',
      ],
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    },
    {
      title: 'Tailwind',
      items: [
        'Layouts',
        'Consistência',
        'Dark mode',
        'Config',
        'Utilitários',
      ],
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    },
    {
      title: 'Bootstrap',
      items: [
        'Grid',
        'Componentes',
        'Utilitários',
        'Overrides',
      ],
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
    },
    {
      title: 'React',
      items: [
        'Hooks',
        'Estado/Props',
        'Formulários',
        'Context',
        'Efeitos',
        'Reutilização',
      ],
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    },
    {
      title: 'Git',
      items: [
        'Branches',
        'Merge',
        'Conflitos',
        'Rebase',
        'Tags',
      ],
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    },
    {
      title: 'GitHub',
      items: [
        'PRs',
        'Issues',
        'Actions',
        'Wiki',
      ],
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
    },
    {
      title: 'Next.js',
      items: [
        'App Router',
        'Client/Server',
        'SEO/Meta',
        'next/image',
        'Rotas dinâmicas',
      ],
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
    },
    {
      title: 'Node.js',
      items: [
        'APIs',
        'Assíncrono',
        'Integrações',
        'Organização',
        'Streams',
      ],
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg'
    },
    {
      title: 'Docker',
      items: [
        'Dockerfile',
        'Compose',
        'Ambiente',
        'Volumes',
        'Networks',
      ],
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg'
    },
    {
      title: 'PostgreSQL',
      items: [
        'Modelagem',
        'Consultas',
        'Índices',
        'Constraints',
        'Views',
      ],
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg'
    },
    {
      title: 'Express',
      items: [
        'Rotas',
        'Middlewares',
        'Erros',
        'Validações',
        'Controllers',
      ],
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg'
    },
    {
      title: 'Electron',
      items: [
        'Desktop',
        'IPC',
        'Builds',
        'Estrutura',
      ],
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg'
    }
  ];
export default function Page() {
    return (
        <Layout>
            <Skills skills={skills} />
        </Layout>
    )
}
