import { technologies } from "../../technologiesIcons";
import { HomeReturn, PortfolioReturn } from "../../interfaces";

import english4learnImage from "../../../images/english4learn.png";
import ChitChatImage from "../../../images/ChitChat.png";
import AuctionCommerceImage from "../../../images/Auction-commerce.png";
import TwitterLikeImage from "../../../images/Twitter-like.png";
import DvdRentalImage from "../../../images/dvd-rental.png";
import PortfolioImage from "../../../images/portfolio.png";

export let en: any = {}; // Main object

// Home Page
let homePage: HomeReturn = {
  title: "Full Stack Developer",
  info: "Full Stack Web Developer self-taught. I am always looking for new challenges and opportunities to grow as a developer, with a strong passion for taking an idea and turning it into a reality through coding. I have much love for learning in general not only in programming",
  technologiesTitle: "Main technologies",
  projects: "See projects",
  technologies: technologies,
  courses: "Courses",
};
en.homePage = homePage;

// Projects

let portfolio: PortfolioReturn = {
  title: "Projects",
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
      technologies: ["python", "django", "react", "html", "css", "javascript"],
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
en.portfolio = portfolio;
