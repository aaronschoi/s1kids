import { useState, useEffect } from "react";
import { list } from "../utils/api";
import { generalAPIcall } from "../utils/api";
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
    const message_id = Number(event.target.getAttribute("messageId"))
    generalAPIcall("messages", {message_id}, "PUT", controller.signal)
    .then(()=> setSuccess(success+1))
    return () => controller.abort();
  };

  return (
    <div className="messages">
      <h3 className="messages-header">Messages</h3>
      {messages.map(({ message_id, created_at, from, message }) => {
        return (
          <div className="message">
            <div className="message-component">
              Timestamp: {fullTime(created_at)}
            </div>
            <div className="message-component">From: {from}</div>
            <div className="message-component message-body">{message}</div>
            <div onClick={handleClose} className="message-close" messageId={message_id}>
              Close
            </div>
          </div>
        );
      })}
    </div>
  );
}
