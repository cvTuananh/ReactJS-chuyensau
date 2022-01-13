import React from "react";
import { useNavigate } from "react-router-dom";

export function MyButtonV3(props){
    let navigate = useNavigate()

    return(
        <div>
            <button onClick={() => navigate(-2)}>Go to 2 page pervious</button>
            <button onClick={() => navigate(-1)}>Go to 1 page pervious</button>
            <button onClick={() => navigate(2)}>Next 2 page</button>
            <button onClick={() => navigate(1)}>Next 1 page</button>
        </div>
    )
}