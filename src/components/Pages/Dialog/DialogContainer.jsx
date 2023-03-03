import React from 'react';
import Dialog from "./Dialog";
import {connect} from "react-redux";
import {addMessageAC} from "../../../redux/reducers/dialogReducer";

function mapStateToProps(state) {
    return {messages: state.dialogsReducer.dialogsData}
}

function mapDispatchToProps(dispatch) {
    return {
        newMessage: (message) => {
            dispatch(addMessageAC(message))
        }
    }
}

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);
export default DialogContainer;