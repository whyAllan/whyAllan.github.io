import HarvardShield from "../icon/Harvard_University_shield.svg";
import { getHomeStrings } from "../strings";

function Home({ language }) {
  const { title, info, tecnologiesTitle, tecnologies, courses } =
    getHomeStrings(language);

  return (
    <>
      <div className="App">
        <p className="my-title" id="title">
          {title}
        </p>

        <p id="my-name">Allan R. Freitas</p>

        <p id="infoText">{info}</p>

        <h3 id="tecnologies">{tecnologiesTitle}</h3>

        <div className="tecnologies">
          {tecnologies.map((tecnology) => (
            <div className="tecnology" key={tecnology.name}>
              <img src={tecnology.url} alt={tecnology.name} />
              <p>{tecnology.name}</p>
            </div>
          ))}
        </div>

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
