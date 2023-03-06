import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {followUserAC, setUsersAC, unfollowUserAC} from "../../../redux/reducers/usersReducer";


function mapStateToProps(state) {
    return {users: state.usersReducer.users}
}

function mapDispatchToProps(dispatch) {
    return {
        follow: (id)=>{dispatch(followUserAC(id))},
        unfollow: (id)=>{dispatch(unfollowUserAC(id))},
        setUsers: (users)=>{dispatch(setUsersAC(users))}
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;