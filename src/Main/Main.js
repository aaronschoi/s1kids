import Header from "../Header/Header"

export default function Main() {

  const audio = new Audio('./Sound/USP-S.mp3')
  audio.volume = .1;
  
  const handleClick = event => {
    event.preventDefault();
    audio.play();
  }

  return (
    <>
    <Header />
    <div className="main">
      <h2 className="main-header">Welcome to HQ.</h2>
      <h3 className="main-subheader">Five Silver 1 Players and a Dream.</h3>
      <div className="tct">
      <img
        className="csgo"
        src={require("../SVG/Terrorist-Line-Drawing.svg").default}
        alt="Terrorist"
        onClick={handleClick}
      />
      <img
        className="csgo"
        src={require("../SVG/Counter-Terrorist-Line-Drawing.svg").default}
        alt="Counter-Terrorist"
        onClick={handleClick}
      />
      </div>
    </div>
    </>
  );
}
