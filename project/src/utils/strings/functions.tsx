import { HomeReturn, PortfolioReturn } from "../interfaces";
import { pt } from "./languages/pt";
import { en } from "./languages/en";

export function getHomeStrings(language: string): HomeReturn {
  // Home Page

  let returnObj: HomeReturn;

  switch (language) {
    case "en":
      returnObj = en.homePage;
      break;
    case "pt":
      returnObj = pt.homePage;

      break;

    default:
      returnObj = en.homePage;
  }

  return returnObj;
}

export function getPortfolioStrings(language: string): PortfolioReturn {
  let returnObj: PortfolioReturn;

  switch (language) {
    case "en":
      returnObj = en.portfolio;
      break;

    case "pt":
      returnObj = pt.portfolio;
      break;

    default:
      returnObj = en.portfolio;
      break;
  }

  return returnObj;
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
