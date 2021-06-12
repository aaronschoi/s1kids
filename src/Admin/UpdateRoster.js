import { useState, useEffect } from "react";
import { list } from "../utils/api";
import EditPlayer from "./EditPlayer";

export default function UpdateRoster() {
  const [roster, setRoster] = useState([]);
  const [playerId, setPlayer_Id] = useState(0);

  const audio = new Audio("./Sound/USP-S.mp3");
  audio.volume = 0.1;

  const loadRoster = () => {
    const controller = new AbortController();
    list("roster", controller.signal).then(setRoster);
    return () => controller.abort();
  };

  useEffect(loadRoster, []);

  const clickHandler = (event) => {
    event.preventDefault();
    audio.play();
    const id = Number(event.target.getAttribute("playerId"));
    setPlayer_Id(id);
  };

  return (
    <div className="update-roster">
      {playerId === 0 ? (
        <>
        <h3 className="admin-header">Players</h3>
          {roster.map(({ player_id, ign, group }) => {
            return (
              <div className="update-roster-element" key={player_id}>
                  <div className="">{ign}{" : "} 
                    <b className={group}>{group}</b>
                  </div>
                  <div
                  key={player_id + "button"}
                  playerId={player_id}
                  onClick={clickHandler}
                  className="button blkbtn"
                >
                  Edit
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <EditPlayer player_id={playerId} />
      )}
    </div>
  );
}
