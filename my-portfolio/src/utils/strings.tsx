import english4learnImage from "../images/english4learn.png";
import ChitChatImage from "../images/ChitChat.png";
import AuctionCommerceImage from "../images/Auction-commerce.png";
import TwitterLikeImage from "../images/Twitter-like.png";
import DvdRentalImage from "../images/dvd-rental.png";
import PortfolioImage from "../images/portfolio.png";

// Technologies And icons
const technologies = [
  {
    name: "python",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "django",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
  },
  {
    name: "javascript",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "typescript",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },

  {
    name: "nodejs",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },

  {
    name: "express",
    url: "https://img.icons8.com/color/48/000000/express-js.png",
  },
  {
    name: "fastify",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastify/fastify-original.svg",
  },
  {
    name: "postgresql",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },

  {
    name: "mongoDB",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "git",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    name: "react",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "aws",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  },
  {
    name: "html",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    name: "css",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },

  {
    name: "linux",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
  },
];

export function getHomeStrings(language: string) {
  switch (language) {
    case "en":
      return {
        // Home Page
        title: "Full Stack Developer",
        info: "Full Stack Web Developer self-taught. I am always looking for new challenges and opportunities to grow as a developer, with a strong passion for taking an idea and turning it into a reality through coding. I have much love for learning in general not only in programming",
        technologiesTitle: "Main technologies",
        projects: "See projects",
        technologies: technologies,
        courses: "Courses",
      };
    case "pt":
      return {
        // Home Page
        title: "Desenvolvedor Full Stack",
        info: "Desenvolvedor Full Stack. Estou sempre procurando por novos desafios e oportunidades para me aprimorar. Tenho muito amor pelo aprendizado geral, não apenas na programação",
        technologiesTitle: "Principais tecnologias",
        projects: "Ver projetos",
        technologies: technologies,
        courses: "Cursos",
      };
  }
}

export function getPortfolioStrings(language: string) {
  switch (language) {
    case "en":
      return {
        title: "Projects",

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
            description: "An interactive web application for English learning.",
            full_description:
              "english4learn.com is a website with various kinds of activities for English learning, I have built it with node on the backend, react on the frontend, and MongoDB as its database and its is hosted using AWS. The activities are from Sacramento County Office of Education (SCOE).",
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
            description: "A showcase web application for DVD rental.",
            full_description:
              "an simple application that uses a sample postgresql database, it uses django builtin object oriented programming to interact with the database. I also used react and javascript for the frontend. The application is deployed in AWS and it is deployed using github actions.",
          },
          {
            name: "ChitChat",
            Image: ChitChatImage,
            url: "",
            github: "https://github.com/whyallan/ChitChat",
            technologies: [
              "node",
              "express",
              "mongoDB",
              "socket.io",
              "react",
              "javascript",
              "typescript",
            ],
            description: "A realtime chat application for online friends.",
            full_description:
              "ChitChat is a real-time chat application. The goal here is to keep the backend constantly connected with the front so that whenever someone sends you a message you receive it instantly or vice versa. In order to do that this app uses the library socket.io which keeps a connection through the backend and the front which makes things lighter and faster than make a request to each message sended or received by you.",
          },
          {
            name: "Twitter-like",
            Image: TwitterLikeImage,
            url: "",
            github: "https://github.com/whyallan/Twitter-like",
            technologies: ["python", "django", "html", "css", "javascript"],
            description: "A Twitter-like application for social media.",
            full_description:
              "An application inspired by twitter/x built with Django combined with Htmx and Javascript to make the site more responsive and user-friendly. It has most of the coolest X functionalities such as make, reply or like a post, follow or unfollow a user, it also has infinite scrolling.",
          },

          {
            name: "Auction Commerce",
            Image: AuctionCommerceImage,
            url: "",
            github: "https://github.com/whyallan/Auction-Commerce",
            technologies: [
              "python",
              "django",
              "react",
              "html",
              "css",
              "javascript",
            ],
            description:
              "An e-commerce platform for selling and buying items in an auction style.",
            full_description:
              "An e-commerce platform for selling and buying items in an auction style. It means every user should be able to start an auction, make a bid, or add or remove any product to their watchlist.",
          },

          {
            name: "Portfolio",
            Image: PortfolioImage,
            url: "",
            github: "https://github.com/whyallan/portfolio",
            technologies: ["react", "html", "css", "javascript", "typescript"],
            description: "My personal portfolio.",
            full_description: "My personal portfolio.",
          },
        ],
      };

    case "pt":
      return {
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
              "mongoDB",
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
            technologies: [
              "python",
              "django",
              "react",
              "html",
              "css",
              "javascript",
            ],
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

    default:
      return {};
  }
}

export function getNavbarStrings(language: string) {
  switch (language) {
    case "en":
      return { projects: "Projects" };
    case "pt":
      return { projects: "Projetos" };
    default:
      return { projects: "Projects" };
  }
}
