import React from 'react';

function Users(props) {
    let users = props.users.map(user => <div key={user.id}>{user.name}</div>)
    return (
        <div>{users}</div>
    );
}

export default Users;