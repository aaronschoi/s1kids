import { generalAPIcall } from '../utils/api';
import { fullTime } from '../utils/formatting';

export default function Message({ message: { message_id, from, message, created_at } }){
    
    const handleClose = event => {
        event.preventDefault();
        const controller = new AbortController();
        generalAPIcall("messages", message_id, "PUT", controller.signal)
        return () => controller.abort();
    }

    return (
        <div className="message">
            <div className="message-component">Timestamp: {fullTime(created_at)}</div>
            <div className="message-component">From: {from}</div>
            <div className="message-component message-body">{message}</div>
            <div onClick={handleClose} className="message-close">Close</div>
        </div>
    )
}