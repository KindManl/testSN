let initialState = {users:[{id:0, name:"alis"},{id:1, name:"sasha"}]}


const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USERS/FOLLOW':
           return state;
        default:
            return state;
    }
}

export default UsersReducer