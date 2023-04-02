import React from 'react';
import {connect} from "react-redux";
import Friends from "./Friends";
import {setFriendsAC} from "../../../redux/reducers/friendsReducer";


function mapStateToProps(state) {
    console.log(state)
    return {friends: state.friendsReducer.friends}
}

function mapDispatchToProps(dispatch) {
    return {setFriends: (friends, totalCount)=>{dispatch(setFriendsAC(friends, totalCount))}}
}



const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default UsersContainer;