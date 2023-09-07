import {Route ,Routes} from "react-router-dom";
import Home from "../components/views/Home.jsx";

function Router() {
    return(
        <Routes>
            <Route path="/home" element={<Home/>}/>
        </Routes>

    )
}