import { useEffect } from "react";
import { getNavbarStrings } from "../utils/strings/functions";
import { goTo } from "../utils/goto";

function Navbar({ language }: { language: string }) {
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

  return (
    <nav className="navbar btn-group me-2" role="group" aria-label="Navigation">
      <button
        type="button"
        className="btn btn-secondary"
        data-ref=""
        onClick={() => goTo("/", language)}
      >
        Home
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        data-ref="projects"
        onClick={() => goTo("/projects", language)}
      >
        {projects}
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        data-ref="social"
        onClick={() => goTo("/social", language)}
      >
        Social
      </button>
    </nav>
  );
}

export default Navbar;
