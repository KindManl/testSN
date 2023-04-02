let initialState = {
    users: [],
    totalCount: 0,
    isFetching: false
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
            return {...state, users: [...action.users], totalCount: action.totalCount}
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

export const setUsersAC = (users, totalCount) => {
    return {type: 'USERS/SET_USERS', users: users, totalCount: totalCount}
}

export default usersReducer;