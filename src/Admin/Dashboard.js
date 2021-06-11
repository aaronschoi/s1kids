import { useState } from "react";
import Messages from "./Messages";
import UpdateRoster from "./UpdateRoster";
import Schedule from "../Schedule/Schedule"

export default function Dashboard( { admin } ) {
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
    <div className="">
      <div className="">
        <div className="" onClick={clickHandler}>Messages</div>
        <div className="" onClick={clickHandler}>Roster</div>
        <div className="" onClick={clickHandler}>Schedule</div>
      </div>
      {adminComponent === "Messages" ? (
        <Messages />
      ) : adminComponent === "Roster" ? (
        <UpdateRoster />
      ) : adminComponent === "Schedule" ? (
        <Schedule admin={admin} />
      ) : null}
    </div>
  );
}
