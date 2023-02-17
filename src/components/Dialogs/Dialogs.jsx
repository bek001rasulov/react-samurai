import React from 'react';
import './Dialogs.css';
import {NavLink} from "react-router-dom";


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

const Dialogs = () => {
    return (
        <div className="dialogs">
            <div className="dialogs-items">
                <DialogItem name="BEK" id="1"/>
                <DialogItem name="JOHN" id="2"/>
                <DialogItem name="MIKE" id="3"/>
                <DialogItem name="MARGO" id="4"/>

            </div>
            <div className="dialog-messages">
                <Message message="HI"/>
                <Message message="hwr"/>
                <Message message="yeah"/>
            </div>
        </div>
    );
};

export default Dialogs;