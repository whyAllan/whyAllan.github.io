export interface HomeReturn {
  title: string;
  info: string;
  technologiesTitle: string;
  projects: string;
  technologies: { name: string; url: string }[];
  courses: string;
}

export interface PortfolioReturn {
  title: string;
  projects: {
    name: string;
    Image: string;
    url: string;
    github: string;
    technologies: string[];
    description: string;
    full_description: string;
  }[];
}
