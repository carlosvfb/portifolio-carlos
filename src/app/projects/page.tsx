import { Projects } from "@/components/projects";
import { Layout } from "@/components/layout";

const projects = [
    {
      title: 'Resgate +',
      description: 'Resgate+ é um projeto open-source desenvolvido com Next.js e estilizado com Tailwind CSS. Ele foi criado para facilitar a arrecadação de alimentos, roupas e outros itens essenciais para auxiliar pessoas afetadas no Rio Grande do Sul. A plataforma conecta doadores a campanhas e iniciativas de apoio, promovendo solidariedade e engajamento social. 🚀❤️',
      previewImage: '/resgatemais.png',
      previewGif: '/resgatemais.gif',
      codeLink: 'https://github.com/lucaoskaique/resgatemais',
      demoLink: 'https://resgatemais.vercel.app/',
    },
    {
      title: 'API GitHub',
      description: 'API GitHub é um projeto feito com HTML, CSS e JavaScript que permite buscar usuários do GitHub por meio da API da plataforma. Ele exibe informações como nome, avatar, bio e repositórios públicos. A interface é responsiva e minimalista, garantindo uma boa experiência. Ideal para explorar perfis rapidamente. 🚀🔥',
      previewImage: '/github.png',
      previewGif: '/github.gif',
      codeLink: 'https://github.com/carlosvfb/projeto-github-api',
      demoLink: 'https://projeto-github-api-jade.vercel.app/',
    },
    {
      title: 'Busca das contratações públicas',
      description: 'Busca das contratações públicas é um site desenvolvido com Next.js e estilizado com Tailwind CSS para buscar contratações públicas. Ele permite filtrar licitações e contratos por uf e a data. A interface é intuitiva e responsiva, garantindo fácil navegação. Os dados são atualizados dinamicamente para transparência. 🚀',
      previewImage: '/pncp.png',
      previewGif: '/pncp.gif',
      codeLink: 'https://github.com/carlosvfb/site-pncp',
      demoLink: 'https://site-pncp.vercel.app/',
    },
    {
      title: 'Dev Burguer',
      description: 'Dev Burguer é um cardápio online feito com HTML, CSS e JavaScript para facilitar pedidos. Os clientes podem adicionar itens ao carrinho e enviar o pedido diretamente pelo WhatsApp do estabelecimento. A interface é responsiva e intuitiva, garantindo uma ótima experiência. O sistema simplifica a gestão de pedidos. 🍔🚀',
      previewImage: '/devburguer.png',
      previewGif: '/devburguer.gif',
      codeLink: 'https://github.com/carlosvfb/projeto-hamburgueria',
      demoLink: 'https://projeto-hamburgueria-zeta.vercel.app/',
    },
    {
      title: 'Buscador de CEP',
      description: 'O Fast CEP Finder é um site desenvolvido com React e estilizado com CSS, criado para buscar CEPs rapidamente. O usuário digita o CEP e recebe, em segundos, o endereço, bairro e cidade correspondentes. A interface é simples, intuitiva e totalmente responsiva, proporcionando uma navegação agradável em qualquer dispositivo.',
      previewImage: '/buscadordecep.png',
      previewGif: '/buscadordecep.gif',
      codeLink: 'https://github.com/carlosvfb/buscador-de-cep',
      demoLink: 'https://buscador-de-cep-black.vercel.app/',
    }
  ];

export default function Page() {
    return (
        <Layout>
            <Projects projects={projects}/>
        </Layout>
    )
}