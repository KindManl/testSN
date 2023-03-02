import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import fakeStore, {subscribe} from "./fakeState/fakeStore";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {
    root.render(
        <BrowserRouter>
            <App state={fakeStore.state} dispatch={fakeStore.dispatch.bind(fakeStore)}/>
        </BrowserRouter>
    )
}

rerenderEntireTree();

subscribe(rerenderEntireTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
