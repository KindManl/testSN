import React, {useState} from 'react';
import {NavLink} from "react-router-dom";


function Dialog(props) {

    let [newMessage, setNewMessage] = useState("");
    let sendMessage = () => {
        props.dispatch({type:'DIALOGS/SEND_MESSAGE', message: newMessage});
        setNewMessage("");

    }

    let change = (e) => {
        setNewMessage(e.target.value);
    }

    let messages = props.state.map(dialog => <div>{dialog.message}</div>)
    return (
        <div>
            <div>{messages}</div>
            <NavLink to="/dialogs">back</NavLink>
            <input type={"text"} placeholder={"type new message..."} value={newMessage} onChange={change}></input>
            <button onClick={sendMessage} >send</button>
            </div>
    );
}
export default Dialog;