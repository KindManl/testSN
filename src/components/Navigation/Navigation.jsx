import {NavLink} from "react-router-dom";

function Navigation() {
    return (
        <div>
            <div>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs">Dialogs</NavLink>
            </div>
            <div><NavLink to="/friends">Friends</NavLink></div>
            <div><NavLink to="/music">Music</NavLink></div>
            <div><NavLink to="/settings">Settings</NavLink></div>
        </div>
    )
}

export default Navigation