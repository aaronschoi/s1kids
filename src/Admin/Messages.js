import { useState, useEffect } from 'react';
import { list } from '../utils/api';
import Message from './Message';

export default function Messages(){

    const [ messages, setMessages ] = useState([]);

    const loadMessages = () => {
        const controller = new AbortController();
        list("messages", controller.signal)
        .then(setMessages)
        return () => controller.abort();
    };

    useEffect(loadMessages, []);

    return(
        <div>
            {messages.map(message => {
                return <Message message={message} />
            })}
        </div>
    )
}