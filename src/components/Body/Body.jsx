import Profile from "../Pages/Profile/Profile";
import Dialogs from "../Pages/Dialogs/Dialogs";
import Friends from "../Pages/Friends/Friends";
import Music from "../Pages/Music/Music";
import Settings from "../Pages/Settings/Settings";
import Dialog from "../Pages/Dialog/Dialog";
import {Route, Routes} from "react-router-dom";

function Body(props) {
    return (
        <div>
            <Routes>
                <Route path="/profile" element=<Profile/> />
                <Route path="/dialogs/:id" element=<Dialog state={props.state.dialogsData} id={0} dispatch={props.dispatch}/> />
                <Route path="/dialogs/" element=<Dialogs state={props.state.dialogs}/> />
                <Route path="/friends" element=<Friends/> />
                <Route path="/music" element=<Music/> />
                <Route path="/settings" element=<Settings/> />
            </Routes>
        </div>
    )
}

export default Body