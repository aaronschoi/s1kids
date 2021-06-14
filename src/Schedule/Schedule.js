import { useState, useEffect } from "react";
import UpdateSchedule from "../Admin/UpdateSchedule";
import { list } from "../utils/api";
import { formatScheduleDate, formatScheduleTime } from "../utils/formatting";
import Header from "../Header/Header"

export default function Schedule({ admin }) {
  const [schedule, setSchedule] = useState([]);
  const [eventId, setEventId] = useState(-1);

  const audio = new Audio('./Sound/USP-S.mp3')
  audio.volume = .1;

  const classNames = admin
    ? {
        schedule: "admin-schedule",
        header: "admin-header",
        body: "admin-body",
        capsule: "admin-capsule",
        sentence: "admin-sentence",
        edit: "button blkbtn",
      }
    : {
        schedule: "main",
        header: "public-header",
        body: "admin-body",
        capsule: "admin-capsule",
        sentence: "admin-sentence",
        edit: "",
      };

  const loadSchedule = () => {
    const controller = new AbortController();
    list("schedule", controller.signal).then(setSchedule);
    return () => controller.abort();
  };

  useEffect(loadSchedule, []);

  const handleNewButton = (event, event_id) => {
    event.preventDefault();
    audio.play();
    if(event.target.innerHTML === "New"){
    setEventId(0);
    }
    else{
      setEventId(Number(event_id));
    }
  }

  return (
    <>
    { admin ? null : <Header /> }
    <div className={classNames.schedule}>
      {eventId < 0 ? (
        <>
          <h2 className={classNames.header}>Schedule</h2>
          { admin ? <div onClick={handleNewButton} className="button new-event">New</div> : null }
          <div className={classNames.body}>
            {schedule.map(({ event_id, day, time, timezone, map, enemy, players }) => {
              return (
                <div key={day + time + timezone} className={classNames.capsule}>
                    <div className={classNames.sentence}>
                      <b>{formatScheduleDate(day)}</b>
                      {` - S1Kids versus `}
                      <b>{enemy}</b>
                      {` on `}
                      <b>{map}</b>
                      {` at `}
                      <b>{formatScheduleTime(time, timezone)}</b>
                    </div>
                    <div
                      className={classNames.sentence}
                    >{`Players: ${players}`}</div>
                  {admin ? <div className={classNames.edit} onClick={event => handleNewButton(event, event_id)}>Edit</div> : null}
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <UpdateSchedule eventid={eventId} />
      )}
    </div>
    </>
  );
}
