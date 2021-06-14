import { useState, useEffect } from "react";
import { list } from "../utils/api";
import EditPlayer from "./EditPlayer";

export default function UpdateRoster() {
  const [roster, setRoster] = useState([]);
  const [playerid, setPlayer_Id] = useState(-1);

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
    const id = Number(event.target.getAttribute("playerid"));
    setPlayer_Id(id);
  };

  const newHandler = (event) => {
    event.preventDefault();
    audio.play();
    setPlayer_Id(0);
  }

  return (
    <div className="update-roster">
      {playerid === -1 ? (
        <>
        <h3 className="admin-header">Players</h3>
        <div className="button" onClick={newHandler}>New</div>
          {roster.map(({ player_id, ign, group }) => {
            return (
              <div className="update-roster-element" key={player_id}>
                  <div className="">{ign}{" : "} 
                    <b className={group}>{group}</b>
                  </div>
                  <div
                  key={player_id + "button"}
                  playerid={player_id}
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
        <EditPlayer player_id={playerid} />
      )}
    </div>
  );
}
