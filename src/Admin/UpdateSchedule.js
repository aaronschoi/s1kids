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

  const [ success, setSuccess ] = useState(false);

  const loadEvent = () => {
    const controller = new AbortController();
    if (eventid && eventid > 0) {
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
      const state = event.target.value === "Update";
      if(state){
        putOrPost( eventid, "schedule", eventData, "PUT", controller.signal)
        .then(() => setSuccess(true))
      }
      else{
        generalAPIcall("schedule", eventData, "POST", controller.signal)
        .then(() => setSuccess(true))
      }
  }

  return (
    <>{ success ? <div>{`Event ${eventid === 0 ? "Created" : "Updated"}`}</div> : (<form className="">
      <input
        name="site"
        type="text"
        value={eventData.site}
        placeholder="site"
        className=""
        onChange={changeHandler}
      />
      <input
        name="day"
        type="date"
        value={eventData.day === "" ? "" : formatDateForHTML(eventData.day)}
        placeholder="What day are you playing?"
        className=""
        onChange={changeHandler}
      />
      <input
        name="time"
        type="time"
        value={eventData.time}
        placeholder="What time are you playing?"
        className=""
        onChange={changeHandler}
      />
      <input
        name="timezone"
        type="text"
        value={eventData.timezone}
        placeholder="What timezone are you playing in?"
        className=""
        onChange={changeHandler}
      />
      <input
        name="map"
        type="text"
        value={eventData.map}
        placeholder="What map are you playing on?"
        className=""
        onChange={changeHandler}
      />
      <input
        name="enemy"
        type="text"
        value={eventData.enemy}
        placeholder="What day are you playing?"
        className=""
        onChange={changeHandler}
      />
      <input
        name="players"
        type="text"
        value={eventData.players}
        placeholder="Which players are playing?"
        className=""
        onChange={changeHandler}
      />
        <input type="submit" value={eventid === 0 ? "Submit" : "Update"} className="" onClick={clickHandler} />
    </form>)}</>
  );
}
