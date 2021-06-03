import { useState, useEffect } from "react";
import { list } from "../utils/api";
import {
  formatScheduleDate,
  formatScheduleTime,
} from "../utils/formatting";

export default function Roster() {
  const [schedule, setSchedule] = useState([]);

  const loadSchedule = () => {
    const controller = new AbortController();
    list("schedule", controller.signal).then(setSchedule);
    return () => controller.abort();
  };

  useEffect(loadSchedule, []);

  return (
    <div className="schedule">
      <h2 className="schedule-title">Schedule</h2>
      <div className="schedule-body">
      {schedule.map(({day, time, timezone, map, enemy, players}, index) => {
        return (
          <div key={index} className="schedule-row">
            <div className="schedule-component">
            <div className="schedule-element"><b>{formatScheduleDate(day)}</b>{` - S1Kids versus `}<b>{enemy}</b>{` on `}<b>{map}</b>{` at `}<b>{formatScheduleTime(time, timezone)}</b></div>
            </div>
            <div className="schedule-component">
            <div className="schedule-element">{`Players: ${players}`}</div>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
}
