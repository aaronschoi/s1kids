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

  const audio = new Audio("./Sound/USP-S.mp3");
  audio.volume = 0.1;

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

  const updateHandler = (event) => {
    event.preventDefault();
    audio.play();
    console.log(player);
  };

  const deleteHandler = (event) => {
    event.preventDefault();
    audio.play();
    const confirm = window.confirm('You are about to get rid of a player. If that is what you truly desire, press the "OK" button.')
    if(confirm){
      console.log("delete here")
    }
  };

  return (
    <form className="form">
      <div className="form-component-container">
        <h3 className="form-header">Player Icon</h3>
        <div className="icon-container">
          <img className="player-icon" src={player.icon} alt={player.ign} />
          <input
            name="icon"
            type="text"
            value={player.icon}
            placeholder="URL to Image Host"
            onChange={changeHandler}
            className="input"
          />
        </div>
      </div>
      <div className="form-component-container">
        <h3 className="form-header">In-Game-Name</h3>
        <input
          name="ign"
          type="text"
          value={player.ign}
          placeholder="Player's In-Game-Name"
          onChange={changeHandler}
          className="input"
        />
      </div>
      <div className="form-component-container">
        <h3 className="form-header">Group</h3>
        <div className="">
          <label className="">
            <input
              name="group"
              type="radio"
              value="core"
              checked={player.group === "core"}
              onChange={changeHandler}
              className="input"
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
              className="input"
            />
            alternate
          </label>
        </div>
      </div>
      <div className="form-component-container">
        <h3 className="form-header">Player Description</h3>
        <textarea
          name="description"
          value={player.description ? player.description : ""}
          placeholder="Anything you want to write about the player"
          onChange={changeHandler}
          className="input"
        />
      </div>
      <div className="button-group">
        <div className="button" onClick={updateHandler}>
          Update
        </div>
        <div className="button" onClick={deleteHandler}>
          Delete
        </div>
      </div>
    </form>
  );
}
