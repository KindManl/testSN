let initialState = {
    friends: [],
    totalCount: 0
}


const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FRIENDS/SET_FRIENDS":
            return {...state, friends: [...action.friends], totalCount: action.totalCount}
        default:
            return state;
    }
}




export const setFriendsAC = (friends, totalCount) => {
    return {type: 'FRIENDS/SET_FRIENDS', friends: friends, totalCount: totalCount}
}

export default friendsReducer;