import React from 'react';
import './Dialogs.css';
import {NavLink} from "react-router-dom";

let dialogsData = [
    {id: 1, name: "Bek"},
    {id: 2, name: "John"},
    {id: 3, name: "Steve"},
    {id: 4, name: "Mike"},
    {id: 5, name: "Mario"},
];

let messagesData = [
    {id: 1, message: "Hi"},
    {id: 2, message: "Hello"},
    {id: 3, message: "Salom"},
    {id: 4, message: "Welcome"},
    {id: 5, message: "Apple"},
];

const DialogItem = (props) => {
    return (
        <div className="dialog-items__item">
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>)
};

const Message = (props) => {
    return (
        <div className="dialog-messages__message">{props.message}</div>
    )
};

let dialogsElements = dialogsData.map( d => <DialogItem name={d.name} id={d.id}/>);
let messagesElements = messagesData.map( m => <Message message={m.message}/>);
const Dialogs = () => {
    return (
        <div className="dialogs">
            <div className="dialogs-items">
                {dialogsElements}
            </div>
            <div className="dialog-messages">
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;