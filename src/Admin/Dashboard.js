import { useState } from "react";
import Messages from "./Messages";
import UpdateRoster from "./UpdateRoster";
import UpdateSchedule from "./UpdateSchedule";

export default function Dashboard() {
  const [adminComponent, setAdminComponent] = useState("");

  const audio = new Audio('./Sound/USP-S.mp3')
  audio.volume = .1;

  const clickHandler = event => {
      event.preventDefault();
      audio.play();
      const buttonString = event.target.getInnerHTML();
      setAdminComponent(buttonString)
  }

  return (
    <div className="dashboard">
      <div className="dashboard-controller">
        <div className="dashboard-button" onClick={clickHandler}>Messages</div>
        <div className="dashboard-button" onClick={clickHandler}>Roster</div>
        <div className="dashboard-button" onClick={clickHandler}>Schedule</div>
      </div>
      {adminComponent === "Messages" ? (
        <Messages />
      ) : adminComponent === "Roster" ? (
        <UpdateRoster />
      ) : adminComponent === "Schedule" ? (
        <UpdateSchedule />
      ) : null}
    </div>
  );
}
