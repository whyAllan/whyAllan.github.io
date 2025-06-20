import gitHubIcon from "../icon/icons8-github-50.png";
import linkedInIcon from "../icon/icons8-linkedin-48.png";
import emailIcon from "../icon/icons8-email-26.png";
import linkIcon from "../icon/icons8-link-24.png";

function Social() {
  return (
    <div className="App">
      <div className="social">
        <div className="social-item">
          <img src={gitHubIcon} className="social-logo" alt="github" /> whyAllan
          <img
            src={linkIcon}
            className="social-link"
            alt="go to site"
            onClick={() => window.open("https://github.com/whyallan", "_blank")}
          />
        </div>

        <div className="social-item">
          <img src={linkedInIcon} className="social-logo" alt="linkedin" />{" "}
          Allan Freitas
          <img
            src={linkIcon}
            className="social-link"
            alt="go to site"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/allan-freitas-52656729a/",
                "_blank"
              )
            }
          />
        </div>

        <div className="social-item">
          <img src={emailIcon} className="social-logo" alt="email" />
          devalanfreitas@gmail.com
          <img
            src={linkIcon}
            className="social-link"
            alt="go to site"
            onClick={() =>
              window.open("mailto:devalanfreitas@gmail.com", "_blank")
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Social;
