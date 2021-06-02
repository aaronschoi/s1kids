export default function Header() {

  const audio = new Audio('./Sound/USP-S.mp3')
  audio.volume = .1;
  
  const handleClick = event => {
    event.preventDefault();
    audio.play();
  }

  return (
    <header className="persistent-header">
      <img
        className="S1KTitle"
        src={require("../SVG/S1KTitle.svg").default}
        alt="S1Kids."
        onMouseDown={handleClick}
      />
      <div className="non-title-links">
      <a className="header-link" rel="noreferrer" target="_blank" href="*">
      <img
        className="social-media"
        src={require("../SVG/team.svg").default}
        alt="Squad"
        onClick={handleClick}
      />
      </a>
      <a className="header-link" rel="noreferrer" target="_blank" href="*">
      <img
        className="social-media"
        src={require("../SVG/schedule.svg").default}
        alt="Schedule"
        onClick={handleClick}
      />
      </a>
      <a className="header-link" rel="noreferrer" target="_blank" href="*">
          <img
        className="social-media"
        src={require("../SVG/service-headset.svg").default}
        alt="Resources"
        onClick={handleClick}
      />
      </a>
      <a className="header-link" rel="noreferrer" target="_blank" href="*">
      <img
        className="social-media"
        src={require("../SVG/Discord.svg").default}
        alt="Discord"
        onClick={handleClick}
      />
      </a>
      <a className="header-link" rel="noreferrer" target="_blank" href="*">
      <img
        className="social-media"
        src={require("../SVG/Steam.svg").default}
        alt="Steam"
        onClick={handleClick}
      />
      </a>
      <a className="header-link" rel="noreferrer" target="_blank" href="https://play.esea.net/teams/8768288">
      <img
        className="social-media"
        src={require("../SVG/ESEA.svg").default}
        alt="ESEA"
        onClick={handleClick}
      />
      </a>
      </div>
    </header>
  );
}
