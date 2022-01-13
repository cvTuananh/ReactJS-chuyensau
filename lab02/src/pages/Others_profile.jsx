import React from "react";
import { useParams } from "react-router-dom";
export function OthersProfile(props){
    let param = useParams();
    return (
        <h1>This is profile {param.id}</h1>
    )
}