import {NavLink} from "react-router-dom";
import s from './navigation.module.css'

function Navigation() {
    return (
        <div className={s.n}>
            <div>
                <NavLink className={s.NavLink} to="/profile">Profile</NavLink>
            </div>
            <div>
                <NavLink className={s.NavLink} to="/dialogs">Dialogs</NavLink>
            </div>
            <div><NavLink className={s.NavLink} to="/friends">Friends</NavLink></div>
            <div><NavLink className={s.NavLink} to="/music">Music</NavLink></div>
            <div><NavLink className={s.NavLink} to="/settings">Settings</NavLink></div>
            <div><NavLink className={s.NavLink} to="/users">People</NavLink></div>
        </div>
    )
}

export default Navigation