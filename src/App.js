import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";
import React from "react";
import {BrowserRouter} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div className='app'>
                <div className='app-wrapper'>
                    <Header/>
                    <div className='n'><Navigation/></div>
                    <div className='b'><Body/></div>
                    <div className='f'><Footer/></div>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
