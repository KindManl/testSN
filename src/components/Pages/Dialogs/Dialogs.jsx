import React from 'react';
import DialogItem from "./DialogItem";


function Dialogs(props) {

    let dataItemed = props.state.map(dialog => <DialogItem name={dialog.name} id={dialog.id} message={dialog.message}/>)

    return (
        <div>
            {dataItemed}
        </div>

    );
}

export default Dialogs;