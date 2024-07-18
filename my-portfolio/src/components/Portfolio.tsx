import { getPortfolioStrings } from "../strings";
import { useState } from "react";
import PopUp from "./PortfolioPopup";

function Portfolio({ language }: any) {
  // eslint-disable-next-line
  const { title, projects } = getPortfolioStrings(language);
  const [ProjectToPup, setProjectToPup] = useState<any>(null);

  if (!projects) return <div />;

  function popUpShow(project: any) {
    console.log(project);
    setProjectToPup(project);
  }

  return (
    <div className="App">
      {ProjectToPup ? (
        <PopUp
          Project={ProjectToPup}
          setProjectToPup={setProjectToPup}
          key={ProjectToPup.name}
        />
      ) : null}

      <h1>{title}</h1>

      <div className="projects">
        <div className="container mx-auto mt-4">
          <div className="row">
            {projects.map((project, index) => (
              <div
                key={index}
                title="see project"
                className="col-md-4"
                onClick={() => popUpShow(project)}
              >
                <div
                  className="card"
                  style={{ width: "22rem", height: "24rem" }}
                >
                  <img src={project.Image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{project.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      <div className="Cardtecnologies">
                        {project.technologies.map((tecnology, index) => (
                          <div key={index} className="CardTecnology">
                            {tecnology}
                          </div>
                        ))}
                      </div>
                    </h6>
                    <p className="card-text">{project.descrition}</p>
                    {project.url.length > 0 ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="btn mr-2"
                      >
                        Visit Site
                      </a>
                    ) : (
                      <i> No site</i>
                    )}
                    <a
                      href={project.guithub}
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                    >
                      Github
                    </a>

                    <small
                      className="card-text"
                      onClick={() => popUpShow(project)}
                    >
                      info
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
