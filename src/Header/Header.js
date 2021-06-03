import { Link } from 'react-router-dom';

export default function Header() {

  const audio = new Audio('./Sound/USP-S.mp3')
  audio.volume = .1;
  
  const handleClick = event => {
    audio.play();
  }

  return (
    <header className="persistent-header">
      <Link className="header-link" to="/">
      <img
        className="S1KTitle"
        src={require("../SVG/S1KTitle.svg").default}
        alt="S1Kids."
        onMouseDown={handleClick}
      />
      </Link>
      <div className="non-title-links">
      <Link className="header-link" to="/admin">
      <img
        className="social-media"
        src={require("../SVG/gear.svg").default}
        alt="Admin"
        onClick={handleClick}
      />
      </Link>
      <Link className="header-link" to="/roster">
      <img
        className="social-media"
        src={require("../SVG/team.svg").default}
        alt="Squad"
        onClick={handleClick}
      />
      </Link>
      <Link className="header-link" to="/schedule">
      <img
        className="social-media"
        src={require("../SVG/schedule.svg").default}
        alt="Schedule"
        onClick={handleClick}
      />
      </Link>
      <Link className="header-link" to="/contact">
          <img
        className="social-media"
        src={require("../SVG/service-headset.svg").default}
        alt="Resources"
        onClick={handleClick}
      />
      </Link>
      <a className="header-link" rel="noreferrer" target="_blank" href="https://discord.gg/mgrxSaMWKs">
      <img
        className="social-media"
        src={require("../SVG/Discord.svg").default}
        alt="Discord"
        onClick={handleClick}
      />
      </a>
      <a className="header-link" rel="noreferrer" target="_blank" href="https://steamcommunity.com/groups/s1kids">
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
