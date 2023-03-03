import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Body from "./components/Body/Body";
import React from "react";
import {NavLink} from "react-router-dom";


const App = (props) => {
    return (
        <div className='app'>
            <div className='app-wrapper'>
                <Header/>
                <div className='n'><Navigation/></div>
                <div className='b'><Body/></div>
                <NavLink className="i" to="/"><img className='i'
                                                   src="https://flyclipart.com/thumb2/course-info-150157.png"></img></NavLink>
            </div>
        </div>
    );
}

export default App;
