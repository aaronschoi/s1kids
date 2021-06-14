import { useState, useEffect } from "react";
import { generalAPIcall, putOrPost, read, destroy } from "../utils/api";
import Error from "../Error/Error";

export default function EditPlayer({ player_id }) {
  const [player, setPlayer] = useState({
    icon: "",
    ign: "",
    group: "",
    description: "",
  });

  const [success, setSuccess] = useState({
    pp: false,
    destroy: false,
  });

  const [responseError, setResponseError] = useState(null);

  const audio = new Audio("./Sound/USP-S.mp3");
  audio.volume = 0.1;

  const loadPlayer = () => {
    const controller = new AbortController();
    if (player_id > 0) {
      read(player_id, "roster", controller.signal).then((response) =>
        setPlayer({
          icon: response.icon,
          ign: response.ign,
          group: response.group,
          description: response.description,
        })
      );
    }
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
    const controller = new AbortController();
    if (player_id !== 0) {
      putOrPost(player_id, "roster", player, "PUT", controller.signal)
        .then(() =>
          setSuccess({
            ...success,
            pp: true,
          })
        )
        .catch(setResponseError);
    } else {
      generalAPIcall("roster", player, "POST", controller.signal)
        .then(() =>
          setSuccess({
            ...success,
            pp: true,
          })
        )
        .catch(setResponseError);
    }
    return () => controller.abort();
  };

  const deleteHandler = (event) => {
    event.preventDefault();
    audio.play();
    const controller = new AbortController();
    const confirm = window.confirm(
      'You are about to get rid of a player. If that is what you truly desire, press the "OK" button.'
    );
    if (confirm) {
      destroy(player_id, "roster", controller.signal)
        .then(() =>
          setSuccess({
            pp: true,
            destroy: true,
          })
        )
        .catch(setResponseError);
    }
    return () => controller.abort();
  };

  return (
    <>
      <Error error={responseError} />
      {success.pp ? (
        <div className="admin-header">{`Player ${
          player_id === 0
            ? "Successfully Created"
            : success.destroy
            ? "Successfully Deleted"
            : "Successfully Updated"
        }`}</div>
      ) : (
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
            <div className="radio-container">
              <div className="radio-element">
                <label className="radio-label">
                  <input
                    name="group"
                    type="radio"
                    value="core"
                    checked={player.group === "core"}
                    onChange={changeHandler}
                    className="radio"
                  />
                  <span className="checkmark"></span>
                </label>
                <h4 className="radio-element-name">core</h4>
              </div>
              <div className="radio-element">
                <label className="radio-label">
                  <input
                    name="group"
                    type="radio"
                    value="alternate"
                    checked={player.group === "alternate"}
                    onChange={changeHandler}
                    className="radio"
                  />
                  <span className="checkmark"></span>
                </label>
                <h4 className="radio-element-name">alternate</h4>
              </div>
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
              {player_id === 0 ? "Submit" : "Update"}
            </div>
            {player_id > 0 ? (
              <div className="button" onClick={deleteHandler}>
                Delete
              </div>
            ) : null}
          </div>
        </form>
      )}
    </>
  );
}
