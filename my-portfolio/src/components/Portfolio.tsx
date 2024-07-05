import { useEffect, useState } from "react";
import { getPortfolioStrings } from "../strings";

function Portfolio({ language }: any) {
  // eslint-disable-next-line
  const [projects, setProjects] = useState([{}]);

  useEffect(() => {
    setProjects(getPortfolioStrings(language));
  }, [language]);

  return (
    <div className="App">
      <h1>Projects</h1>

      <div className="row row-cols-1 row-cols-md-3 g-4"></div>
    </div>
  );
}

export default Portfolio;
