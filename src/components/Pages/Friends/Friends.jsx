import React, {useEffect} from 'react';
import axios from "axios";

function Friends(props) {

    useEffect(() => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users/", {
            withCredentials: true,
            headers: {"API-KEY": "5b72ddbe-bcdc-47a8-8127-3a3a1a43f034"},
            params: {friend: true}
        })
            .then(response => {
                console.log(response);
                props.setFriends(response.data.items, response.data.totalCount)
            })

    }, []);


    let friends = props.friends.map((friend) => {
        return (
            <div key={friend.id}>{friend.name}</div>
        )
    })

    return (
        <div>{friends}</div>
    );
}

export default Friends;