import HarvardShield from "../icon/Harvard_University_shield.svg";
import { getHomeStrings } from "../utils/strings/functions";
import { goTo } from "../utils/goto";

function Home({ language }: { language: string }) {
  const { title, info, technologiesTitle, projects, technologies, courses } =
    getHomeStrings(language);

  return (
    <>
      <div className="App">
        <p className="my-title" id="title">
          {title}
        </p>

        <p id="my-name">Allan R. Freitas</p>

        <p id="infoText">{info}</p>

        <h3 id="technologies">{technologiesTitle}</h3>

        <div className="technologies">
          {technologies.map((technology) => (
            <div className="technology" key={technology.name}>
              <img src={technology.url} alt={technology.name} />
              <p>{technology.name}</p>
            </div>
          ))}
        </div>

        <p className="d-grid gap-2">
          <button
            className="btn btn-dark"
            onClick={() => goTo("/projects", language)}
          >
            {projects}
          </button>
        </p>

        <div className="certification">
          <h3 id="courses">{courses}</h3>

          <button
            className="certification-button"
            onClick={() =>
              window.open(
                "https://certificates.cs50.io/da90ca9a-84a4-433b-896d-8a322bb2a467.png?size=letter",
                "_blank"
              )
            }
          >
            <span>
              <img src={HarvardShield} alt="CS50 shield" />
              CS50's introduction to computer science (2023)
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
