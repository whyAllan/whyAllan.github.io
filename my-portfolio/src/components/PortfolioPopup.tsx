function PopUp({ Project, setProjectToPup }: any) {
  const { name, technologies, full_description, url, guithub, Image } = Project;

  return (
    <div className="PopUp">
      <div className="VoidContainer" onClick={() => setProjectToPup(null)} />
      <div className="PopUpContainer">
        <img
          src="https://img.icons8.com/?size=100&id=3QmmTwcR4c2b&format=png&color=000000"
          alt="close"
          onClick={() => setProjectToPup(null)}
          className="close"
        />
        <div className="card mb-3">
          <img src={Image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h3 className="card-title">{name}</h3>

            <p className="card-text">
              <small
                className="text-body-secondary"
                data-bs
                data-bs-theme="dark"
              >
                {technologies.join(", ")}
              </small>
            </p>

            <p className="card-text">{full_description}</p>

            <div className="card-links">
              {url.length > 0 ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn mr-2"
                >
                  Visit Site
                </a>
              ) : (
                <small> No site</small>
              )}
              <a
                href={guithub}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
