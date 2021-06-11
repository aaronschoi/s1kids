import { useState, useEffect } from "react";
import UpdateSchedule from "../Admin/UpdateSchedule";
import { list } from "../utils/api";
import { formatScheduleDate, formatScheduleTime } from "../utils/formatting";

export default function Schedule({ admin }) {
  const [schedule, setSchedule] = useState([]);
  const [eventId, setEventId] = useState(-1);

  const classNames = admin
    ? {
        schedule: "",
        header: "",
        body: "",
        capsule: "",
        capsulette: "",
        sentence: "",
        edit: "",
      }
    : {
        schedule: "",
        header: "",
        body: "",
        capsule: "",
        capsulette: "",
        sentence: "",
        edit: "",
      };

  const loadSchedule = () => {
    const controller = new AbortController();
    list("schedule", controller.signal).then(setSchedule);
    return () => controller.abort();
  };

  useEffect(loadSchedule, []);

  return (
    <div className={classNames.schedule}>
      {eventId < 0 ? (
        <>
          <h2 className={classNames.header}>Schedule</h2>
          { admin ? <div onClick={() => setEventId(0)}>New Event</div> : null }
          <div className={classNames.body}>
            {schedule.map(({ event_id, day, time, timezone, map, enemy, players }) => {
              return (
                <div key={day + time + timezone} className={classNames.capsule}>
                  <div className={classNames.capsulette}>
                    <div className={classNames.sentence}>
                      <b>{formatScheduleDate(day)}</b>
                      {` - S1Kids versus `}
                      <b>{enemy}</b>
                      {` on `}
                      <b>{map}</b>
                      {` at `}
                      <b>{formatScheduleTime(time, timezone)}</b>
                    </div>
                  </div>
                  <div className={classNames.capsulette}>
                    <div
                      className={classNames.sentence}
                    >{`Players: ${players}`}</div>
                  </div>
                  {admin ? <div className={classNames.edit} onClick={() => setEventId(Number(event_id))}>Edit</div> : null}
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <UpdateSchedule eventid={eventId} />
      )}
    </div>
  );
}
