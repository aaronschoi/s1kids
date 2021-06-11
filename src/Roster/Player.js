export default function Player({
  player: { ign, icon, description },
}) {
  return (
    <>
      <img className="" src={icon} alt={ign} />
      <h3 className="">{ign}</h3>
      {description || description !== "" ? <p className="">{description}</p> : null}
    </>
  );
}
