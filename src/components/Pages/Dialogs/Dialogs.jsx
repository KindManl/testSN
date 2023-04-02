import React from 'react';
import DialogItem from "./DialogItem";


function Dialogs(props) {
    let dialogList = props.dialogList.map(dialog => <DialogItem id={dialog.id} name={dialog.name} key={dialog.id} message={dialog.message}/>)

    return (
        <div>
            {dialogList}
        </div>

    );
}

export default Dialogs;