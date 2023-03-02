import dialogReducer from "../redux/reducers/dialogReducer";

let rerenderEntireTree;

let fakeStore = {
    state: {
        dialogs: [
            {name: "alis", id: 0, message: "go0"},
            {name: "sasha", id: 1, message: "go1"},
            {name: "pasha", id: 2, message: "go2"},
            {name: "oleg", id: 3, message: "go3"},
            {name: "gavsius", id: 4, message: "go4"},
        ]
        ,
        dialogsData: [
            {id: 0, message: "0m"},
            {id: 1, message: "1m"},
            {id: 2, message: "2m"},
            {id: 3, message: "3m"},
            {id: 4, message: "4m"},
        ],

    },
    dispatch(action) {
        this.state = dialogReducer(this.state, action);

        rerenderEntireTree();
    }
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default fakeStore;
