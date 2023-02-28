import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";

function Body() {
    return (
        <div>
            <Routes>
                <Route path="/profile" element=<Profile/> />
                <Route path="/dialogs" element=<Dialogs/> />
            </Routes>

        </div>
    )
}

export default Body