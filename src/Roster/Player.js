export default function Player({
  player: { ign, icon, description },
}) {
  return (
    <>
      <img className="player-icon" src={icon} alt={ign} />
      <h3 className="player-name">{ign}</h3>
      {description ? <p className="player-description">{description}</p> : null}
    </>
  );
}
