import { useState, useEffect } from "react";
import { read } from "../utils/api";

export default function EditPlayer({ player_id }) {
  const [player, setPlayer] = useState({
    player_id: 0,
    icon: "",
    ign: "",
    group: "",
    description: "",
  });

  const loadPlayer = () => {
    const controller = new AbortController();
    read(player_id, "roster", controller.signal).then(setPlayer);
    return () => controller.abort();
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(loadPlayer, []);

  const changeHandler = (event) => {
    setPlayer({
      ...player,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(player);
  };

  return (
    <form onSubmit={submitHandler} className="">
      <div className="">
        <h3 className="">Player Icon</h3>
      <div className="">
        <img className="player-icon" src={player.icon} alt={player.ign} />
          <input
            name="icon"
            type="text"
            value={player.icon}
            placeholder="URL to Image Host"
            onChange={changeHandler}
            className=""
          />
      </div>
      </div>
      <div className="">
        <h3 className="">In-Game-Name</h3>
      <input
        name="ign"
        type="text"
        value={player.ign}
        placeholder="Player's In-Game-Name"
        onChange={changeHandler}
        className=""
      />
      </div>
      <div className="">
        <h3 className="player-header">Group</h3>
      <div className="">
        <label className="">
          <input
            name="group"
            type="radio"
            value="core"
            checked={player.group === "core"}
            onChange={changeHandler}
            className=""
          />
          core
        </label>
        <label className="">
          <input
            name="group"
            type="radio"
            value="alternate"
            checked={player.group === "alternate"}
            onChange={changeHandler}
            className=""
          />
          alternate
        </label>
      </div>
      </div>
      <div className="">
        <h3 className="">Player Description</h3>
        <textarea
          name="description"
          value={player.description ? player.description : ""}
          placeholder="Anything you want to write about the player"
          onChange={changeHandler}
          className=""
        />
      </div>
      <div className="">
        <input type="submit" value="Update" className="" />
        <input type="button" className="" value="Delete Forever" />
      </div>
    </form>
  );
}
