import { useState, useEffect } from "react";
import { generalAPIcall, putOrPost, read } from "../utils/api";
import { formatDateForHTML } from "../utils/formatting";

export default function UpdateSchedule({ eventid }) {
  const [eventData, setEventData] = useState({
    event_id: 0,
    site: "ESEA",
    day: "",
    time: "",
    timezone: "PST",
    map: "",
    enemy: "",
    players: "",
  });

  const [success, setSuccess] = useState(false);

  const loadEvent = () => {
    const controller = new AbortController();
    if (eventid && eventid > 0) {
      console.log("yes")
      read(eventid, "schedule", controller.signal).then(setEventData);
    }
    return () => controller.abort();
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(loadEvent, []);

  const changeHandler = (event) => {
    setEventData({
      ...eventData,
      [event.target.name]: event.target.value,
    });
  };

  const clickHandler = (event) => {
    event.preventDefault();
    const controller = new AbortController();
    const state = event.target.innerHTML === "Update";
    if (state) {
      putOrPost(eventid, "schedule", eventData, "PUT", controller.signal).then(
        () => setSuccess(true)
      );
    } else {
      generalAPIcall("schedule", eventData, "POST", controller.signal).then(
        () => setSuccess(true)
      );
    }
  };

  return (
    <>
      {success ? (
        <div className="admin-header">{`Event ${eventid === 0 ? "Successfully Created" : "Successfully Updated"}`}</div>
      ) : (
        <>
        <h3 className="admin-header">{eventid === 0 ? "New Event" : "Edit Event"}</h3>
        <form className="form">
            <input
              name="site"
              type="text"
              value={eventData.site}
              placeholder="site"
              className="input"
              onChange={changeHandler}
            />
            <input
              name="day"
              type="date"
              value={
                eventData.day === "" ? "" : formatDateForHTML(eventData.day)
              }
              placeholder="What day are you playing?"
              className="input"
              onChange={changeHandler}
            />
            <input
              name="time"
              type="time"
              value={eventData.time}
              placeholder="What time are you playing?"
              className="input"
              onChange={changeHandler}
            />
            <input
              name="timezone"
              type="text"
              value={eventData.timezone}
              placeholder="What timezone are you playing in?"
              className="input"
              onChange={changeHandler}
            />
            <input
              name="map"
              type="text"
              value={eventData.map}
              placeholder="What map are you playing on?"
              className="input"
              onChange={changeHandler}
            />
            <input
              name="enemy"
              type="text"
              value={eventData.enemy}
              placeholder="Who is the opposing team?"
              className="input"
              onChange={changeHandler}
            />
            <input
              name="players"
              type="text"
              value={eventData.players}
              placeholder="Which players are playing?"
              className="input"
              onChange={changeHandler}
            />
            <div
              className="button"
              onClick={clickHandler}>
                {eventid === 0 ? "Submit" : "Update"}
            </div>
        </form>
        </>
      )}
    </>
  );
}
