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
    name: "bootstrap",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
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
      return [
        {
          title: "Portfolio",
        },
      ];
    case "pt":
      return [
        {
          title: "Portfólio",
        },
      ];

    default:
      return [{}];
  }
}
