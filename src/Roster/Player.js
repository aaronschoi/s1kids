export default function Player({
  player: { ign, icon, description },
}) {
  return (
    <>
      <img className="player-icon" src={icon} alt={ign} />
      <div className="roster-description">
      <h3 className="roster-description">{ign}</h3>
      {description || description !== "" ? <p className="roster-description">{description}</p> : null}
      </div>
    </>
  );
}
