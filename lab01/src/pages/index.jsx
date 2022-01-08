import React from "react";
import Navbar from "../components/navbar";
import {
BrowserRouter,
Routes,
Route,
} from 'react-router-dom';
import {Home} from './Home';
import {About}from './about';
import {Contact} from './contact'
import { Products } from "./products";
function Index() {
return ( 

    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route index element={<Home/>}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="product/*" element={<Products />}/>
        </Routes>
    </BrowserRouter>
);
}


export default Index;