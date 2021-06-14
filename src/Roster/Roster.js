import { useState, useEffect } from "react";
import { list } from "../utils/api";
import Player from "./Player";
import Header from "../Header/Header"

export default function Roster() {
  const [roster, setRoster] = useState([]);

  const loadRoster = () => {
    const controller = new AbortController();
    list("roster", controller.signal).then(setRoster);
    return () => controller.abort();
  };

  useEffect(loadRoster, []);

  return (
    <>
    <Header />
    <div className="main">
      <h2 className="public-header">Core</h2>
      <div className="roster-element">
        {roster.map((player) => {
          if (player.group === "core") {
            return (
              <div
                className="roster-player"
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
      <h2 className="public-header">Alternates</h2>
      <div className="roster-element">
        {roster.map((player) => {
          if (player.group === "alternate") {
            return (
              <div
                className="roster-player"
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
    </>
  );
}
