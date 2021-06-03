export default function Player({
  player: { player_id, ign, icon, group, description },
}) {
  return (
    <div className="player-card" key={player_id} group={group}>
      <img className="player-icon" src={icon} alt={ign} />
      <h3 className="player-name">{ign}</h3>
      {description ? <p className="player-description">{description}</p> : null}
    </div>
  );
}
