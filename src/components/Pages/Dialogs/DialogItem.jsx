import React from 'react';
import {NavLink} from "react-router-dom";
import s from '../../Navigation/navigation.module.css'

function DialogItem(props) {
    return (
        <div>
            <NavLink to={"dialogs/" + props.id} className={s.NavLink}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;