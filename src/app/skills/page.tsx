import { Skills } from "@/components/skills";
import { Layout } from "@/components/layout";

const skills = [
    {
      title: 'HTML',
      description: 'HTML (HyperText Markup Language) é a linguagem de marcação padrão usada para criar e estruturar conteúdo na web. Ele fornece a base para a construção de páginas web e é fundamental para a criação de sites e aplicações web.',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    },
    {
      title: 'CSS',
      description: 'CSS (Cascading Style Sheets) é uma linguagem de estilo usada para descrever a apresentação de documentos HTML. Com CSS, você pode definir como os elementos HTML devem ser exibidos em termos de layout, cores, fontes e outros aspectos visuais.',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    },
    {
      title: 'JavaScript',
      description: 'JavaScript é uma linguagem de programação amplamente usada para o desenvolvimento web, conhecida por sua capacidade de adicionar interatividade e dinamismo às páginas da web. É uma linguagem de programação interpretada que pode ser executada no navegador ou em servidores.',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    },
    {
      title: 'TypeScript',
      description: 'TypeScript é um superconjunto do JavaScript desenvolvido pela Microsoft que adiciona tipagem estática opcional ao JavaScript. Ele ajuda a encontrar e evitar erros no código durante o desenvolvimento, proporcionando uma melhor experiência de desenvolvimento e um código mais robusto e escalável. ',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    },
    {
      title: 'Tailwind',
      description: 'Tailwind CSS é um framework CSS utilitário que facilita a criação de interfaces de usuário modernas e responsivas. Em vez de fornecer componentes prontos, Tailwind oferece classes utilitárias de baixo nível que podem ser combinadas para construir qualquer design.',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    },
    {
      title: 'Bootstrap',
      description: 'O Bootstrap é um framework de front-end de código aberto, originalmente desenvolvido pelo Twitter, que facilita a criação de sites e aplicações web responsivas e modernas.',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
    },
    {
      title: 'React',
      description: 'O React é uma biblioteca JavaScript desenvolvida pelo Facebook que é utilizada para construir interfaces de usuário (UIs) de forma eficiente e declarativa. Ele é especialmente popular para o desenvolvimento de aplicações web de página única (SPAs).',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    },
    {
      title: 'Git',
      description: 'Git é um sistema de controle de versão distribuído, amplamente utilizado para rastrear mudanças no código-fonte durante o desenvolvimento de software. Criado por Linus Torvalds em 2005, Git permite que desenvolvedores colaborem de maneira eficiente e segura.',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    },
    {
      title: 'GitHub',
      description: 'GitHub é uma plataforma de hospedagem de código-fonte baseada na web que utiliza o sistema de controle de versão Git. Fundado em 2008 e agora pertencente à Microsoft, o GitHub oferece ferramentas de colaboração, gerenciamento de repositórios, integração contínua e muito mais, facilitando o trabalho conjunto de desenvolvedores em projetos de software.',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
    },
    {
      title: 'Next.js',
      description: 'Next.js é um framework de desenvolvimento web baseado em React que facilita a criação de aplicações web rápidas e escaláveis. Desenvolvido pela Vercel, Next.js oferece recursos poderosos para renderização no lado do servidor (SSR), geração de sites estáticos (SSG), rotas dinâmicas e muito mais.',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
    },
    {
      title: 'Node.js',
      description: 'Node.js é um ambiente de execução JavaScript baseado no motor V8 do Google Chrome, que permite rodar código JavaScript no servidor. Ele é assíncrono, baseado em eventos e não bloqueante, tornando-o extremamente eficiente para aplicações escaláveis e de alto desempenho, como APIs, microsserviços e aplicações em tempo real.',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg'
    },
    {
      title: 'Docker',
      description: 'Docker é uma plataforma de código aberto que facilita a criação, distribuição e execução de aplicações em containers. Containers são ambientes isolados e leves que incluem tudo o que uma aplicação precisa para funcionar, garantindo portabilidade e consistência entre diferentes ambientes, como desenvolvimento, teste e produção.',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg'
    },
    {
      title: 'PostgreSQL',
      description: 'PostgreSQL é um sistema de gerenciamento de banco de dados relacional open-source, conhecido por sua robustez, escalabilidade e conformidade com padrões SQL. Ele oferece suporte a transações ACID, consultas complexas, armazenamento de dados JSON, índices avançados e extensibilidade, permitindo que os desenvolvedores adicionem novos tipos de dados e funcionalidades personalizadas.',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg'
    },
    {
      title: 'Express',
      description: 'Express.js é um framework minimalista e flexível para Node.js, projetado para construir APIs e aplicações web de forma rápida e eficiente. Ele simplifica a criação de rotas, manipulação de requisições e respostas, além de oferecer suporte a middlewares, que permitem adicionar funcionalidades como autenticação, logs e tratamento de erros.',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg'
    },
    {
      title: 'Electron',
      description: 'Electron é um framework de código aberto que permite criar aplicativos de desktop multiplataforma usando tecnologias web como HTML, CSS e JavaScript. Ele combina o Node.js com o Chromium para oferecer uma experiência nativa em Windows, macOS e Linux. Muito utilizado para criar softwares como VS Code e Discord, o Electron facilita o desenvolvimento de aplicações poderosas e compatíveis com diversos sistemas operacionais.',
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