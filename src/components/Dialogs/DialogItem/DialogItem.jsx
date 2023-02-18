import React from "react";
import {NavLink} from 'react-router-dom'
import './DialogItem.css';


const DialogItem = (props) => {
    return (
        <div className="dialog-items__item">
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>)
};

export default DialogItem;