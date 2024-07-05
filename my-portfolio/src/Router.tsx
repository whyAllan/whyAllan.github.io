import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Social from "./components/Social";
import Navbar from "./components/Navbar";
import { useParams } from "react-router-dom";
import PlanetIcon from "./icon/icons8-planet-66.png";

function Router() {
  let { language } = useParams();
  if (language === undefined) language = "en";

  function changeLanguage() {
    if (language === "pt") {
      language = "en";
    } else {
      language = "pt";
    }
    const url = window.location.hash;
    let path = url.split("/")[2];
    if (path === undefined) path = "";
    window.location.href = "#/" + language + "/" + path;
  }

  return (
    <>
      <Navbar language={language} />
      <div className="chage-language" onClick={changeLanguage}>
        <img src={PlanetIcon} alt="change language icon" />
        <span>{language}</span>
      </div>
      <Routes>
        <Route path="/" element={<Home language={language} key={language} />} />
        <Route
          path="/projects"
          element={<Portfolio key={language} language={language} />}
        />
        <Route path="/social" element={<Social key={language} />} />
      </Routes>
    </>
  );
}

export default Router;
