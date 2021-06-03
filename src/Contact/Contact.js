import { useState } from 'react';

export default function Contact() {

    const [ formData, setFormData ] = useState({
        from: "",
        message: "",
    })

    const changeHandler = event => {
        setFormData({
            ...formData,
            [event.target.name]:event.target.value,
        })
    };

    const submitHandler = event => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>
                        From:
                        <input name="from" type="text" value={formData.from} placeholder="Your name or your organization's name." onChange={changeHandler}/>
                    </label>
                </div>
                <div>
                    <label>
                        Message:
                        <textarea name="message" value={formData.message} placeholder="Something will be written here" onChange={changeHandler}/>
                    </label>
                </div>
                <input type="submit" value="Submit" className="submit"/>
            </form>
        </div>
    )
}