import { useState } from "react";
import Error from "../Error/Error";
import { generalAPIcall } from "../utils/api";
import Success from "./Success";

export default function Contact() {
  const [formData, setFormData] = useState({
    from: "",
    message: "",
  });

  const [formError, setFormError] = useState(null);

  const [success, setSuccess] = useState(0);

  const audio = new Audio('./Sound/USP-S.mp3')
  audio.volume = .1;

  const changeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    audio.play();
    const controller = new AbortController();
    generalAPIcall("messages", formData, "POST", controller.signal)
      .then(() =>
        setFormData({
          from: "",
          message: "",
        })
      )
      .then(() => setSuccess(success + 1))
      .then(() => setFormError(null))
      .catch(setFormError);
    return () => controller.abort();
  };

  return (
    <div className="">
      <Success success={success} />
      <Error error={formError} />
      <h3 className="contact-header">Message Us!</h3>
      <form onSubmit={submitHandler} className="">
        <div className="">
          <input
            name="from"
            type="text"
            value={formData.from}
            placeholder="From"
            onChange={changeHandler}
            className=""
          />
        </div>
        <div className="">
          <textarea
            name="message"
            value={formData.message}
            placeholder="Message"
            onChange={changeHandler}
            className=""
          />
        </div>
        <input type="submit" value="Submit" className="" />
      </form>
    </div>
  );
}
