import { Link } from 'react-router-dom';

export default function Header() {

  const audio = new Audio('./Sound/USP-S.mp3')
  audio.volume = .1;
  
  const handleClick = event => {
    audio.play();
  }

  const hamburgerHandler = event => {
    audio.play();
    event.target.classList.toggle("change")
    document.getElementById("hamburger-menu").classList.toggle("drop")
  }

  const barHandler = event => {
    audio.play();
    event.target.parentElement.classList.toggle("change")
  }

  return (
    <>
    {window.innerWidth > 770 ?
    (<nav className="header">
      <Link className="link" to="/">
      <img
        className="logo"
        src={require("../SVG/S1KTitle.svg").default}
        alt="S1Kids."
        onMouseDown={handleClick}
      />
      </Link>
      <div>
      <Link className="link" to="/admin">
      <img
        className="header-icon"
        src={require("../SVG/gear.svg").default}
        alt="Admin"
        onClick={handleClick}
      />
      </Link>
      <Link className="link" to="/roster">
      <img
        className="header-icon"
        src={require("../SVG/team.svg").default}
        alt="Squad"
        onClick={handleClick}
      />
      </Link>
      <Link className="link" to="/schedule">
      <img
        className="header-icon"
        src={require("../SVG/schedule.svg").default}
        alt="Schedule"
        onClick={handleClick}
      />
      </Link>
      <Link className="link" to="/contact">
          <img
        className="header-icon"
        src={require("../SVG/service-headset.svg").default}
        alt="Resources"
        onClick={handleClick}
      />
      </Link>
      <a className="link" rel="noreferrer" target="_blank" href="https://discord.gg/mgrxSaMWKs">
      <img
        className="header-icon"
        src={require("../SVG/Discord.svg").default}
        alt="Discord"
        onClick={handleClick}
      />
      </a>
      <a className="link" rel="noreferrer" target="_blank" href="https://steamcommunity.com/groups/s1kids">
      <img
        className="header-icon"
        src={require("../SVG/Steam.svg").default}
        alt="Steam"
        onClick={handleClick}
      />
      </a>
      <a className="link" rel="noreferrer" target="_blank" href="https://play.esea.net/teams/8768288">
      <img
        className="header-icon"
        src={require("../SVG/ESEA.svg").default}
        alt="ESEA"
        onClick={handleClick}
      />
      </a>
      </div>
    </nav>) : (<><nav className="header">
      <Link className="link" to="/">
      <img
        className="logo"
        src={require("../SVG/S1KTitle.svg").default}
        alt="S1Kids."
        onMouseDown={handleClick}
      />
      </Link>
      <div className="hamburger" onClick={hamburgerHandler}>
        <div className="bar-1" onClick={barHandler}></div>
        <div className="bar-2" onClick={barHandler}></div>
        <div className="bar-3" onClick={barHandler}></div>
      </div>
      </nav>
      <div id="hamburger-menu" className="hamburger-menu">
      <Link className="hamburger-link" to="/admin">
      <img
        className="header-icon"
        src={require("../SVG/gear.svg").default}
        alt="Admin"
        onClick={handleClick}
      />
      </Link>
      <Link className="hamburger-link" to="/roster">
      <img
        className="header-icon"
        src={require("../SVG/team.svg").default}
        alt="Squad"
        onClick={handleClick}
      />
      </Link>
      <Link className="hamburger-link" to="/schedule">
      <img
        className="header-icon"
        src={require("../SVG/schedule.svg").default}
        alt="Schedule"
        onClick={handleClick}
      />
      </Link>
      <Link className="hamburger-link" to="/contact">
          <img
        className="header-icon"
        src={require("../SVG/service-headset.svg").default}
        alt="Resources"
        onClick={handleClick}
      />
      </Link>
      <a className="hamburger-link" rel="noreferrer" target="_blank" href="https://discord.gg/mgrxSaMWKs">
      <img
        className="header-icon"
        src={require("../SVG/Discord.svg").default}
        alt="Discord"
        onClick={handleClick}
      />
      </a>
      <a className="hamburger-link" rel="noreferrer" target="_blank" href="https://steamcommunity.com/groups/s1kids">
      <img
        className="header-icon"
        src={require("../SVG/Steam.svg").default}
        alt="Steam"
        onClick={handleClick}
      />
      </a>
      <a className="hamburger-link" rel="noreferrer" target="_blank" href="https://play.esea.net/teams/8768288">
      <img
        className="header-icon"
        src={require("../SVG/ESEA.svg").default}
        alt="ESEA"
        onClick={handleClick}
      />
      </a>
      </div>
      </>)}
    </>
  );
}
