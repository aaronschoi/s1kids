export default function Main() {

  const audio = new Audio('./Sound/USP-S.mp3')
  audio.volume = .1;
  
  const handleClick = event => {
    event.preventDefault();
    audio.play();
  }

  return (
    <div className="main">
      <h2>Welcome to HQ.</h2>
      <p className="main-paragraph">Five Silver 1 Players and a Dream.</p>
      <div className="backdrop-box">
      <img
        className="backdrop"
        src={require("../SVG/Terrorist-Line-Drawing.svg").default}
        alt="Terrorist"
        onClick={handleClick}
      />
      <img
        className="backdrop"
        src={require("../SVG/Counter-Terrorist-Line-Drawing.svg").default}
        alt="Counter-Terrorist"
        onClick={handleClick}
      />
      </div>
    </div>
  );
}
