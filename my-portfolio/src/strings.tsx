import english4learnImage from "./images/english4learn.png";
import ChitChatImage from "./images/ChitChat.png";
import AuctionCommerceImage from "./images/Auction-commerce.png";
import TwitterLikeImage from "./images/Twitter-like.png";

const tecnologies = [
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
    name: "sql",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
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
    name: "npm",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
  },
];

export function getHomeStrings(language: string) {
  switch (language) {
    case "en":
      return {
        // Home Page
        title: "Full Stack Developer",
        info: "Full Stack Web Developer self-taught. I am always looking for new challenges and opportunities to grow as a developer, with a strong passion for taking an idea and turning it into a reality through coding. I have much love for learning in general not only in programming",
        tecnologiesTitle: "Main tecnologies",
        tecnologies: tecnologies,
        courses: "Courses",
      };
    case "pt":
      return {
        // Home Page
        title: "Desenvolvedor Full Stack",
        info: "Desenvolvedor Full Stack. Sou sempre procurando por novos desafios e oportunidades para me aprimorar. Tenho muito amor pelo aprendizado geral, não apenas na programação",
        tecnologiesTitle: "Principais tecnologias",
        tecnologies: tecnologies,
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
            guithub: "https://github.com/trepallan/english4learn",
            technologies: [
              "node",
              "express",
              "mongoDB",
              "aws",
              "react",
              "javascript",
              "typescript",
            ],
            descrition: "An interactive web application for English learning.",
            full_description:
              "english4learn.com is a website with various kinds of activities for English learning, I have built it with node on the backend, react on the frontend, and MongoDB as its database and its is hosted using AWS. The activities are from Sacramento County Office of Education (SCOE).",
          },
          {
            name: "ChitChat",
            Image: ChitChatImage,
            url: "",
            guithub: "https://github.com/trepallan/ChitChat",
            technologies: [
              "node",
              "express",
              "mongoDB",
              "socket.io",
              "react",
              "javascript",
              "typescript",
            ],
            descrition: "A realtime chat application for online friends.",
            full_description:
              "ChitChat is a real-time chat application. The goal here is to keep the backend constantly connected with the front so that whenever someone sends you a message you receive it instantly or vice versa. In order to do that this app uses the library socket.io which keeps a connection through the backend and the front which makes things lighter and faster than make a request to each message sended or received by you.",
          },
          {
            name: "Twitter-like",
            Image: TwitterLikeImage,
            url: "",
            guithub: "https://github.com/trepallan/Twitter-like",
            technologies: [
              "python",
              "django",
              "react",
              "html",
              "css",
              "javascript",
            ],
            descrition: "A Twitter-like application for social media.",
            full_description:
              "An application inspired by twitter/x built with Django combined with Htmx and Javascript to make the site more responsive and user-friendly. It has most of the coolest X functionalities such as make, reply or like a post, follow or unfollow a user, it also has infinite scrolling.",
          },

          {
            name: "Auction Commerce",
            Image: AuctionCommerceImage,
            url: "",
            guithub: "https://github.com/trepallan/Auction-Commerce",
            technologies: [
              "python",
              "django",
              "react",
              "html",
              "css",
              "javascript",
            ],
            descrition:
              "An e-commerce platform for selling and buying items in an auction style.",
            full_description:
              "An e-commerce platform for selling and buying items in an auction style. It means every user should be able to start an auction, make a bid, or add or remove any product to their watchlist.",
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
            guithub: "https://github.com/trepallan/english4learn",
            technologies: [
              "node",
              "express",
              "mongoDB",
              "aws",
              "react",
              "javascript",
              "typescript",
            ],
            descrition: "Uma aplicação web interativa para aprender inglês.",
            full_description:
              "english4learn.com é um site com diversos tipos de atividades para o aprendizado de inglês. Eu o desenvolvi com Node no backend, React no frontend, e MongoDB como banco de dados e o site é hospedado usando AWS. As atividades são do Sacramento County Office of Education (SCOE).",
          },

          {
            name: "ChitChat",
            Image: ChitChatImage,
            url: "",
            guithub: "https://github.com/trepallan/ChitChat",
            technologies: [
              "node",
              "express",
              "mongoDB",
              "socket.io",
              "react",
              "javascript",
              "typescript",
            ],
            descrition:
              "Uma aplicação de bate-papo em tempo real para amigos online.",
            full_description:
              "ChitChat é um aplicativo de chat em tempo real. O objetivo aqui é manter o backend constantemente conectado com o frontend, para que sempre que alguém envie ou receba uma mensagem o processo seja instantaneo. Para isso, este aplicativo usa a biblioteca socket.io, que mantém uma conexão entre o backend e o frontend, tornando as coisas mais leves e rápidas do que fazer uma requisição para cada mensagem enviada ou recebida por você.",
          },

          {
            name: "Twitter-like",
            Image: TwitterLikeImage,
            url: "",
            guithub: "https://github.com/trepallan/Twitter-like",
            technologies: [
              "python",
              "django",
              "react",
              "html",
              "css",
              "javascript",
            ],
            descrition: "Uma aplicação Twitter-like para rede social.",
            full_description:
              "Um aplicativo inspirado no Twitter/X, desenvolvido com Django combinado com Htmx e JavaScript para tornar o site mais responsivo e amigável. Ele possui a maioria das funcionalidades mais legais do X, como criar, responder ou curtir uma postagem, e seguir um perfil. Também conta com rolagem infinita.",
          },

          {
            name: "Auction Commerce",
            Image: AuctionCommerceImage,
            url: "",
            guithub: "https://github.com/trepallan/Auction-commerce",
            technologies: [
              "python",
              "django",
              "react",
              "html",
              "css",
              "javascript",
            ],
            descrition:
              "Um e-commerce de leilão, onde o leilão acontece em tempo real.",
            full_description:
              "Um e-commerce de leilão. Todos os usuários devem poder iniciar um leilão, fazer um lote, ou adicionar ou remover um item para sua lista de desejos.",
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
