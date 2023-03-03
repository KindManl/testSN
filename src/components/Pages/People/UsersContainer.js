import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";


function mapStateToProps(state) {
    return{users: state.peopleReducer.users}
}

function mapDispatchToProps(dispatch) {
    return{}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;