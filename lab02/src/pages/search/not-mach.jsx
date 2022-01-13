import React from "react";
import { Link } from "react-router-dom";

export function NotMatch(props){
    return(
        <div>
            <h1>Error 404</h1>
            <Link to = "search"/>
        </div>
    )
}