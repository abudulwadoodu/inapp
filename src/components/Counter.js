import { useState } from "react";

function Component4() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count+1);
    }

    const decrementCount = () => {
        setCount(count-1);
    }

    return (
        <>
        <h1>Component A</h1>
        <h2>{count}</h2>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
        </>
    );
}

export default Component4;