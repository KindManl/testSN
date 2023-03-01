import React from 'react';
import DialogItem from "./DialogItem";


function Dialogs(props) {
    return (
        <div>
            <DialogItem name="alis" id={0}/>
            <DialogItem name="sasha" id={1}/>
            <DialogItem name="pasha" id={2}/>
            <DialogItem name="oleg" id={3}/>
            <DialogItem name="gavs" id={4}/>
        </div>

    );
}

export default Dialogs;