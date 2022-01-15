import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterReducer";


export function Counter(){
    const countNumber = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    return(
        <>
            <button onClick={()=> dispatch(increment())}>increment</button>
            <span>{countNumber}</span>
            <button onClick={()=> dispatch(decrement())}>decrement</button>
        </>
    )
};