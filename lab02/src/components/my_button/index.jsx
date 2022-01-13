import { useNavigate } from "react-router-dom";

export function MyButton(props){
    let navigate = useNavigate()
    function handleClick(){
        navigate('/home');
    }
    return <button onClick={handleClick}>Sumit</button>
}