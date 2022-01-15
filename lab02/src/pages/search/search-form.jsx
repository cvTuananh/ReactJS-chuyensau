import React from "react"
import { useSearchParams } from "react-router-dom"
let users=["mr Buoi","ms Oi","mr Cam","ms Truc"]
export default function SearchHome(props){
    let [serachPrams, setSearchPrams]=useSearchParams("");
    let user = serachPrams.get("user");
    let result = users.find(item => item === user)
    const HandleSubmit = (even) => {
        even.prevenDefault();
        let formData = new FormData(even.currentTarget);
        let keyWork = formData.get("user");
        setSearchPrams({user:keyWork});

    }

    return(
        <>
            <h1>Search result</h1>
            <form onSubmit={HandleSubmit}>
                <input type="text" name="user" value={serachPrams}/>
                <button type="submit">Search</button>
            </form>
            <div>
                <h2>{result}</h2>
            </div>
        </>
    )
}
