import { technologies } from "../../technologiesIcons";
import { HomeReturn, PortfolioReturn } from "../../interfaces";

import english4learnImage from "../../../images/english4learn.png";
import ChitChatImage from "../../../images/ChitChat.png";
import AuctionCommerceImage from "../../../images/Auction-commerce.png";
import TwitterLikeImage from "../../../images/Twitter-like.png";
import DvdRentalImage from "../../../images/dvd-rental.png";
import PortfolioImage from "../../../images/portfolio.png";

export let pt: any = {};

// Home Page
let homePage: HomeReturn = {
  title: "Desenvolvedor Full Stack",
  info: "Desenvolvedor Full Stack. Estou sempre procurando por novos desafios e oportunidades para me aprimorar. Tenho muito amor pelo aprendizado geral, não apenas na programação",
  technologiesTitle: "Principais tecnologias",
  projects: "Ver projetos",
  technologies: technologies,
  courses: "Cursos",
};
pt.homePage = homePage;

// Projects
let portfolio: PortfolioReturn = {
  title: "Projetos",

  // Projects
  projects: [
    {
      name: "english4learn",
      Image: english4learnImage,
      url: "https://english4learn.com",
      github: "https://github.com/whyallan/english4learn",
      technologies: [
        "node",
        "express",
        "mongoDB",
        "aws",
        "react",
        "javascript",
        "typescript",
      ],
      description: "Uma aplicação web interativa para aprender inglês.",
      full_description:
        "english4learn.com é um site com diversos tipos de atividades para o aprendizado de inglês. Eu o desenvolvi com Node no backend, React no frontend, e MongoDB como banco de dados e o site é hospedado usando AWS. As atividades são do Sacramento County Office of Education (SCOE).",
    },

    {
      name: "DVD Rental",
      Image: DvdRentalImage,
      url: "https://allanfreitas.com/dvd-rental",
      github: "https://github.com/whyallan/DVD_Rental",
      technologies: [
        "django",
        "python",
        "react",
        "postgresql",
        "javascript",
        "typescript",
      ],
      description: "Uma aplicação web para uma aluguel de DVD.",
      full_description:
        "Um aplicativo simples que utiliza um banco de dados demostrativo PostgreSQL. Ele usa a programação orientada a objetos integrada do Django para interagir com o banco de dados. Também usei React e JavaScript para o frontend. O aplicativo é hospedado na AWS e GitHub Actions.",
    },

    {
      name: "ChitChat",
      Image: ChitChatImage,
      url: "",
      github: "https://github.com/whyallan/ChitChat",
      technologies: [
        "node",
        "express",
        "socket.io",
        "react",
        "javascript",
        "typescript",
      ],

      description:
        "Uma aplicação de bate-papo em tempo real para amigos online.",
      full_description:
        "ChitChat é um aplicativo de chat em tempo real. O objetivo aqui é manter o backend constantemente conectado com o frontend, para que sempre que alguém envie ou receba uma mensagem o processo seja instantaneo. Para isso, este aplicativo usa a biblioteca socket.io, que mantém uma conexão entre o backend e o frontend, tornando as coisas mais leves e rápidas do que fazer uma requisição para cada mensagem enviada ou recebida por você.",
    },

    {
      name: "Twitter-like",
      Image: TwitterLikeImage,
      url: "",
      github: "https://github.com/whyallan/Twitter-like",
      technologies: ["python", "django", "html", "css", "javascript"],
      description: "Uma aplicação Twitter-like para rede social.",
      full_description:
        "Um aplicativo inspirado no Twitter/X, desenvolvido com Django combinado com Htmx e JavaScript para tornar o site mais responsivo e amigável. Ele possui a maioria das funcionalidades mais legais do X, como criar, responder ou curtir uma postagem, e seguir um perfil. Também conta com rolagem infinita.",
    },

    {
      name: "Auction Commerce",
      Image: AuctionCommerceImage,
      url: "",
      github: "https://github.com/whyallan/Auction-commerce",
      technologies: ["python", "django", "react", "html", "css", "javascript"],
      description:
        "Um e-commerce de leilão, onde o leilão acontece em tempo real.",
      full_description:
        "Um e-commerce de leilão. Todos os usuários devem poder iniciar um leilão, fazer um lote, ou adicionar ou remover um item para sua lista de desejos.",
    },

    {
      name: "Portfolio",
      Image: PortfolioImage,
      url: "",
      github: "https://github.com/whyallan/portfolio",
      technologies: ["react", "html", "css", "javascript", "typescript"],
      description: "Meu portfolio.",
      full_description: "Meu portfolio.",
    },
  ],
};
pt.portfolio = portfolio;
