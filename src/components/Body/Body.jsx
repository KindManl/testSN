import Profile from "../Pages/Profile/Profile";
import DialogsContainer from "../Pages/Dialogs/DialogsContainer";
import FriendsContainer from "../Pages/Friends/FriendsContainer";
import Music from "../Pages/Music/Music";
import Settings from "../Pages/Settings/Settings";
import DialogContainer from "../Pages/Dialog/DialogContainer";
import UsersContainer from "../Pages/Users/UsersContainer";
import {Route, Routes} from "react-router-dom";
import c from "./body.module.css"

function Body(props) {
    return (
        <div className={c.b}>
            <Routes>
                <Route path="/profile" element=<Profile/> />
                <Route path="/dialogs/:id" element=<DialogContainer/> />
                <Route path="/dialogs/" element=<DialogsContainer/> />
                <Route path="/friends" element=<FriendsContainer/> />
                <Route path="/music" element=<Music/> />
                <Route path="/settings" element=<Settings/> />
                <Route path="/users" element=<UsersContainer/> />
            </Routes>
        </div>
    )
}

export default Body