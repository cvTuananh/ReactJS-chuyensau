import React from "react";
import {
    BrowserRouter,
    Route,
    Routes,
    Link,
    Outlet
} from 'react-router-dom'
import { Home } from './home'
import { Profile } from "./profile";
import {MyProfile} from './my_profile'
import {OthersProfile}from './Others_profile'
function Index() {
    return ( 
        <>
           <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="profile" element={<Profile />} >
                    <Route path="me" element={<MyProfile />} />
                    <Route path=":id" element={<OthersProfile />} />
                    </Route>
                </Routes>
           </BrowserRouter>
        </>
     );
}

export default Index;