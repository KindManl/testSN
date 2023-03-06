let initialState = {
    dialogs: [
        {name: "alis", id: 0, message:"go0"},
        {name: "sasha", id: 1, message:"go1"},
        {name: "pasha", id: 2, message:"go2"},
        {name: "oleg", id: 3, message:"go3"},
        {name: "gavsius", id: 4, message:"go4"}
    ]
    ,
    dialogsData: [
        {id: 0, message: "0m"},
        {id: 1, message: "1m"},
        {id: 2, message: "2m"},
        {id: 3, message: "3m"},
        {id: 4, message: "4m1"}
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DIALOGS/SEND_MESSAGE':
            let message = action.message;
            return {
                ...state,
                dialogsData: [...state.dialogsData, {id: 6, message: message}]
            }
        default:
            return state;
    }
}


export const addMessageAC = (newMessage) => {
    return {type:'DIALOGS/SEND_MESSAGE', message: newMessage}
}

export default dialogsReducer;