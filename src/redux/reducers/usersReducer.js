let initialState = {
    users: [
        ]
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USERS/FOLLOW':
        case "USERS/UNFOLLOW":
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.id)
                        u.followed = !u.followed
                    return u;
                })
            };
        case "USERS/SET_USERS":
            return { ...state, users :[...action.users]}
        default:
            return state;
    }
}


export const followUserAC = (id) => {
    return {type: 'USERS/FOLLOW', id: id}
}

export const unfollowUserAC = (id) => {
    return {type: 'USERS/UNFOLLOW', id: id}
}

export const setUsersAC = (users) => {
    return {type: 'USERS/SET_USERS', users: users}
}
export default usersReducer;