import { useState, useEffect } from "react";
import { list, generalAPIcall } from "../utils/api";
import { fullTime } from "../utils/formatting";

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [ success, setSuccess ] = useState(0);

  const audio = new Audio('./Sound/USP-S.mp3')
  audio.volume = .1;

  const loadMessages = () => {
    const controller = new AbortController();
    list("messages", controller.signal).then(setMessages);
    return () => controller.abort();
  };

  useEffect(loadMessages, [success]);

  const handleClose = (event) => {
    event.preventDefault();
    audio.play();
    const controller = new AbortController();
    const message_id = Number(event.target.getAttribute("messageid"))
    generalAPIcall("messages", {message_id}, "PUT", controller.signal)
    .then(()=> setSuccess(success+1))
    return () => controller.abort();
  };

  return (
    <div className="">
      <h3 className="">Messages</h3>
      {messages.map(({ message_id, created_at, from, message }) => {
        return (
          <div className="" key={message_id}>
            <div className="">
              Timestamp: {fullTime(created_at)}
            </div>
            <div className="">From: {from}</div>
            <div className="">{message}</div>
            <div onClick={handleClose} className="" messageid={message_id}>
              Close
            </div>
          </div>
        );
      })}
    </div>
  );
}
