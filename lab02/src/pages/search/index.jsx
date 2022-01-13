import React from "react"
import {
    Routes,
    Route,
    Outlet,
    Link,
    useSearchParams
} from 'react-router-dom'
import { NotMatch } from "./not-mach"
import SearchHome from "./search-form"
export default function Search(props){
    return(
        <div>
            <h1>Search</h1>
            <Routes>
                <Route path="/" element={<SearchHome />}/>
                <Route path="*" element={<NotMatch/>}/>
            </Routes>
        </div>
    )
}