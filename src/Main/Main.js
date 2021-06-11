export default function Main() {

  const audio = new Audio('./Sound/USP-S.mp3')
  audio.volume = .1;
  
  const handleClick = event => {
    event.preventDefault();
    audio.play();
  }

  return (
    <div className="">
      <h2>Welcome to HQ.</h2>
      <p className="">Five Silver 1 Players and a Dream.</p>
      <div className="">
      <img
        className=""
        src={require("../SVG/Terrorist-Line-Drawing.svg").default}
        alt="Terrorist"
        onClick={handleClick}
      />
      <img
        className=""
        src={require("../SVG/Counter-Terrorist-Line-Drawing.svg").default}
        alt="Counter-Terrorist"
        onClick={handleClick}
      />
      </div>
    </div>
  );
}
