import React, {useEffect} from 'react';
import axios from "axios";

function Users(props) {


    useEffect(() => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items)
            })
    }, []);


    let mapedUsers = props.users.map(user => {
        if (user.followed)
            return (
                <div key={user.id}>{user.name}
                    <div onClick={() => {
                        props.unfollow(user.id)
                    }}>unfollow
                    </div>
                </div>)
        else return (
            <div key={user.id}>{user.name}
                <div onClick={() => {
                    props.follow(user.id)
                }}>follow
                </div>
            </div>)
    })


    return (<div>{mapedUsers}</div>);
}

export default Users;