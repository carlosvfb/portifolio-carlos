import { Projects } from "@/components/projects";
import { Layout } from "@/components/layout";

const projects = [
    {
      title: 'Projeto Agência XYZ',
      description: 'Descrição breve do projeto.',
      image: '/projeto-agencia-xyz.jpg',
      codeLink: 'https://github.com/carlosvfb/primeira-landing-page',
      demoLink: 'https://carlosvfb.github.io/primeira-landing-page/',
    },
    {
      title: 'Projeto API GitHub',
      description: 'Descrição breve do projeto.',
      image: '/projeto-api-github.jpg',
      codeLink: 'https://github.com/carlosvfb/projeto-github-api',
      demoLink: 'https://projeto-github-api-jade.vercel.app/',
    },
    {
      title: 'Projeto GTA',
      description: 'Descrição breve do projeto.',
      image: '/projeto-gta.png',
      codeLink: 'https://github.com/carlosvfb/projeto-gta',
      demoLink: 'https://carlosvfb.github.io/projeto-gta/',
    },
    {
      title: 'Projeto Hamburgueria',
      description: 'Descrição breve do projeto.',
      image: '/projeto-hamburgueria.jpg',
      codeLink: 'https://github.com/carlosvfb/projeto-hamburgueria',
      demoLink: 'https://projeto-hamburgueria-zeta.vercel.app/',
    },
    {
      title: 'Projeto Jogo Da Cobrinha',
      description: 'Descrição breve do projeto.',
      image: '/projeto-jogo-cobrinha.png',
      codeLink: 'https://github.com/carlosvfb/jogo-da-cobrinha',
      demoLink: 'https://jogo-da-cobrinha-beta.vercel.app/',
    },
    {
      title: 'Projeto One Piece',
      description: 'Descrição breve do projeto.',
      image: '/projeto-one-piece.png',
      codeLink: 'https://github.com/carlosvfb/projeto-one-piece',
      demoLink: 'https://carlosvfb.github.io/projeto-one-piece/',
    },
    {
      title: 'Projeto X-men',
      description: 'Descrição breve do projeto.',
      image: '/projeto-x-men.png',
      codeLink: 'https://github.com/carlosvfb/projeto-x-men',
      demoLink: 'https://carlosvfb.github.io/projeto-x-men/',
    }
  ];

export default function Page() {
    return (
        <Layout>
            <Projects projects={projects}/>
        </Layout>
    )
}