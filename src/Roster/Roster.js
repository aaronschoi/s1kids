import { useState, useEffect } from "react";
import { list } from "../utils/api";
import Player from "./Player";

export default function Roster() {
  const [roster, setRoster] = useState([]);

  const loadRoster = () => {
    const controller = new AbortController();
    list("roster", controller.signal).then(setRoster);
    return () => controller.abort();
  };

  useEffect(loadRoster, []);

  return (
    <div className="roster">
      <h2>Core</h2>
      <div className="roster-component">
        {roster.map((player) => {
          if (player.group === "core") {
            return (
              <div
                className="player-card"
                key={player.player_id}
                group={player.group}
              >
                <Player player={player} />
              </div>
            );
          }
          return null;
        })}
      </div>
      <h2>Alternates</h2>
      <div className="roster-component">
        {roster.map((player) => {
          if (player.group === "alternate") {
            return (
              <div
                className="player-card"
                key={player.player_id}
                group={player.group}
              >
                <Player player={player} />
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
