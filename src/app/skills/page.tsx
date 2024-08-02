import { Skills } from "@/components/skills";
import { Layout } from "@/components/layout";

const skills = [
    {
      title: 'HTML',
      description: 'HTML (HyperText Markup Language) é a linguagem de marcação usada para criar e estruturar páginas da web, definindo elementos como texto, imagens, links e tabelas por meio de tags.',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
      documentationLink: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML'
    },
    {
      title: 'CSS',
      description: ' CSS (Cascading Style Sheets) é a linguagem usada para estilizar essas páginas, controlando a aparência de elementos HTML, como cores, fontes, layout e espaçamento.',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
      documentationLink: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS'
    },
    {
      title: 'JavaScript',
      description: 'JavaScript é uma linguagem de programação usada no desenvolvimento web para adicionar interatividade e dinamismo às páginas, permitindo a criação de scripts que são executados no navegador, tornando as páginas mais interativas.',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
      documentationLink: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'
    },
    {
      title: 'TypeScript',
      description: 'TypeScript é uma linguagem de programação baseada em JavaScript que adiciona tipagem estática e recursos avançados para desenvolvimento de aplicações mais robustas e escaláveis. ',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      documentationLink: 'https://www.typescriptlang.org/docs/'
    },
    {
      title: 'Tailwind',
      description: 'Tailwind e um framework de CSS que permite a criação de designs responsivos e estilização de elementos HTML.',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      documentationLink: 'https://tailwindcss.com/'
    },
    {
      title: 'Bootstrap',
      description: 'Bootstrap é um framework de CSS que permite a criação de interfaces de usuário responsivas e estilizadas.',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
      documentationLink: 'https://getbootstrap.com/'
    },
    {
      title: 'React',
      description: '',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      documentationLink: 'https://pt-br.legacy.reactjs.org/'
    },
    {
      title: 'Git',
      description: 'Descrição breve do projeto.',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
      documentationLink: 'https://git-scm.com/'
    },
    {
      title: 'GitHub',
      description: 'Descrição breve do projeto.',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
      documentationLink: 'https://docs.github.com/pt'
    },
    {
      title: 'Next.js',
      description: 'Descrição breve do projeto.',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
      documentationLink: 'https://nextjs.org/'
    },
  ];
export default function Page() {
    return (
        <Layout>
            <Skills skills={skills} />
        </Layout>
    )
}