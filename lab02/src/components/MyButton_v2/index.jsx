import React from "react";
import { useNavigate } from "react-router-dom";

export function MyButtonV2(props){
    let navigate = useNavigate()
    const handleClick = () => {
        navigate('/home',{replace:true})
        // navigate('/profile/6666',{state:state})
    }
    return <button onClick={handleClick}>Sumit v2</button>
}