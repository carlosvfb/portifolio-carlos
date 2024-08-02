import { Projects } from "@/components/projects";
import { Layout } from "@/components/layout";

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

export default function Page() {
    return (
        <Layout>
            <Projects projects={projects}/>
        </Layout>
    )
}