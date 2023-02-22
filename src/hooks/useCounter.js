import { useState } from "react";

function useCounter(value, step, startLimit, endLimit){
    const [count, setCount] = useState(value)

    function increment(){
        console.log('Increment');
        if (count < endLimit) {
            setCount(count + step);
        }
    }

    function decrement(){
        console.log('Decrement');
        if (count > startLimit) {
            setCount(count - step);
        }
    }

    function reset(){
        console.log('Reset');
        setCount(value)
    }

    return [count, increment, decrement, reset];
}

export default useCounter;
