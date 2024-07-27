import { Layout } from '@/components/layout';
import { Projects } from '@/components/projects';
import { Skills } from '@/components/skills';
import { About } from '@/components/about';

const projects = [
  {
    title: 'Projeto Agência XYZ',
    description: 'Descrição breve do projeto.',
    image: '/projeto-agencia-xyz.jpg',
    codeLink: 'https://github.com/seu-usuario/projeto1',
    demoLink: 'https://demo.com/projeto1',
  },
  {
    title: 'Projeto API GitHub',
    description: 'Descrição breve do projeto.',
    image: '/projeto-api-github.jpg',
    codeLink: 'https://github.com/seu-usuario/projeto2',
    demoLink: 'https://demo.com/projeto2',
  },
  {
    title: 'Projeto GTA',
    description: 'Descrição breve do projeto.',
    image: '/projeto-gta.png',
    codeLink: 'https://github.com/seu-usuario/projeto3',
    demoLink: 'https://demo.com/projeto3',
  },
  {
    title: 'Projeto Hamburgueria',
    description: 'Descrição breve do projeto.',
    image: '/projeto-hamburgueria.jpg',
    codeLink: 'https://github.com/seu-usuario/projeto4',
    demoLink: 'https://demo.com/projeto4',
  },
  {
    title: 'Projeto Snake Game',
    description: 'Descrição breve do projeto.',
    image: '/projeto-jogo-cobrinha.png',
    codeLink: 'https://github.com/seu-usuario/projeto4',
    demoLink: 'https://demo.com/projeto4',
  },
  {
    title: 'Projeto Listagem Pokemon',
    description: 'Descrição breve do projeto.',
    image: '/projeto-listagem-pokemon.png',
    codeLink: 'https://github.com/seu-usuario/projeto4',
    demoLink: 'https://demo.com/projeto4',
  },
  {
    title: 'Projeto One Piece',
    description: 'Descrição breve do projeto.',
    image: '/projeto-one-piece.png',
    codeLink: 'https://github.com/seu-usuario/projeto4',
    demoLink: 'https://demo.com/projeto4',
  },
  {
    title: 'Projeto X-men',
    description: 'Descrição breve do projeto.',
    image: '/projeto-x-men.png',
    codeLink: 'https://github.com/seu-usuario/projeto4',
    demoLink: 'https://demo.com/projeto4',
  }
];
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
    description: 'Descrição breve do projeto.',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    documentationLink: 'https://www.typescriptlang.org/docs/'
  },
  {
    title: 'Tailwind',
    description: 'Descrição breve do projeto.',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    documentationLink: 'https://tailwindcss.com/'
  },
  {
    title: 'Bootstrap',
    description: 'Descrição breve do projeto.',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
    documentationLink: 'https://getbootstrap.com/'
  },
  {
    title: 'React',
    description: 'Descrição breve do projeto.',
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
export default function Home() {
  return (
    <Layout>
      <About />
      <Skills skills={skills} />
      <Projects projects={projects} />
    </Layout>
  );
}
