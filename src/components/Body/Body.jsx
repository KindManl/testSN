import Profile from "../Pages/Profile/Profile";
import Dialogs from "../Pages/Dialogs/Dialogs";
import Friends from "../Pages/Friends/Friends";
import Music from "../Pages/Music/Music";
import Settings from "../Pages/Settings/Settings";
import {Route, Routes} from "react-router-dom";

function Body() {
    return (
        <div>
            <Routes>
                <Route path="/profile" element=<Profile/> />
                <Route path="/dialogs" element=<Dialogs/> />
                <Route path="/friends" element=<Friends/> />
                <Route path="/music" element=<Music/> />
                <Route path="/settings" element=<Settings/> />
            </Routes>

        </div>
    )
}

export default Body