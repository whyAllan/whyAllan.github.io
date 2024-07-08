import { useEffect } from "react";
import { getNavbarStrings } from "../strings";

function Navbar({ language }) {
  const { projects } = getNavbarStrings(language);

  let location = window.location.hash.split("/")[2];
  if (location === undefined) location = "";
  useEffect(() => {
    document.querySelectorAll("button").forEach((button) => {
      if (button.getAttribute("data-ref") === location) {
        button.classList.add("active");
        button.classList.add("disabled");
      } else {
        button.classList.remove("active");
        button.classList.remove("disabled");
      }
    });
  }, [location]);

  function goTo(ref) {
    window.location.href = "#/" + language + ref;
  }

  return (
    <nav className="navbar btn-group me-2" role="group" aria-label="Navigation">
      <button
        type="button"
        className="btn btn-secondary"
        data-ref=""
        onClick={() => goTo("/")}
      >
        Home
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        data-ref="projects"
        onClick={() => goTo("/projects")}
      >
        {projects}
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        data-ref="social"
        onClick={() => goTo("/social")}
      >
        Social
      </button>
    </nav>
  );
}

export default Navbar;
