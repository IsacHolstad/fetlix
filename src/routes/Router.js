import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../components/views/Home";
import Login from "../components/views/Login";

function Router() {
    return(
        <>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/" element={<Login/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </>
    )
}

export default Router;