import React from 'react';
import './Dialogs.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";





const Dialogs = (props) => {
    let dialogsElements = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messagesData.map(m => <Message message={m.message}/>);
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