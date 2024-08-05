import { Skills } from "@/components/skills";
import { Layout } from "@/components/layout";

const skills = [
    {
      title: 'HTML',
      description: 'HTML (HyperText Markup Language) é a linguagem de marcação padrão usada para criar e estruturar conteúdo na web. Ele fornece a base para a construção de páginas web e é fundamental para a criação de sites e aplicações web.',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
      documentationLink: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML'
    },
    {
      title: 'CSS',
      description: 'CSS (Cascading Style Sheets) é uma linguagem de estilo usada para descrever a apresentação de documentos HTML. Com CSS, você pode definir como os elementos HTML devem ser exibidos em termos de layout, cores, fontes e outros aspectos visuais.',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
      documentationLink: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS'
    },
    {
      title: 'JavaScript',
      description: 'JavaScript é uma linguagem de programação amplamente usada para o desenvolvimento web, conhecida por sua capacidade de adicionar interatividade e dinamismo às páginas da web. É uma linguagem de programação interpretada que pode ser executada no navegador ou em servidores.',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
      documentationLink: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'
    },
    {
      title: 'TypeScript',
      description: 'TypeScript é um superconjunto do JavaScript desenvolvido pela Microsoft que adiciona tipagem estática opcional ao JavaScript. Ele ajuda a encontrar e evitar erros no código durante o desenvolvimento, proporcionando uma melhor experiência de desenvolvimento e um código mais robusto e escalável. ',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      documentationLink: 'https://www.typescriptlang.org/docs/'
    },
    {
      title: 'Tailwind',
      description: 'Tailwind CSS é um framework CSS utilitário que facilita a criação de interfaces de usuário modernas e responsivas. Em vez de fornecer componentes prontos, Tailwind oferece classes utilitárias de baixo nível que podem ser combinadas para construir qualquer design.',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      documentationLink: 'https://tailwindcss.com/'
    },
    {
      title: 'Bootstrap',
      description: 'O Bootstrap é um framework de front-end de código aberto, originalmente desenvolvido pelo Twitter, que facilita a criação de sites e aplicações web responsivas e modernas.',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
      documentationLink: 'https://getbootstrap.com/'
    },
    {
      title: 'React',
      description: 'O React é uma biblioteca JavaScript desenvolvida pelo Facebook que é utilizada para construir interfaces de usuário (UIs) de forma eficiente e declarativa. Ele é especialmente popular para o desenvolvimento de aplicações web de página única (SPAs).',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      documentationLink: 'https://pt-br.legacy.reactjs.org/'
    },
    {
      title: 'Git',
      description: 'Git é um sistema de controle de versão distribuído, amplamente utilizado para rastrear mudanças no código-fonte durante o desenvolvimento de software. Criado por Linus Torvalds em 2005, Git permite que desenvolvedores colaborem de maneira eficiente e segura.',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
      documentationLink: 'https://git-scm.com/'
    },
    {
      title: 'GitHub',
      description: 'GitHub é uma plataforma de hospedagem de código-fonte baseada na web que utiliza o sistema de controle de versão Git. Fundado em 2008 e agora pertencente à Microsoft, o GitHub oferece ferramentas de colaboração, gerenciamento de repositórios, integração contínua e muito mais, facilitando o trabalho conjunto de desenvolvedores em projetos de software.',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
      documentationLink: 'https://docs.github.com/pt'
    },
    {
      title: 'Next.js',
      description: 'Next.js é um framework de desenvolvimento web baseado em React que facilita a criação de aplicações web rápidas e escaláveis. Desenvolvido pela Vercel, Next.js oferece recursos poderosos para renderização no lado do servidor (SSR), geração de sites estáticos (SSG), rotas dinâmicas e muito mais.',
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