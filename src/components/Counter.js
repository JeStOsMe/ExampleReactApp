import React, {useState, Fragment} from "react";

const Counter = () => {
    
    const [number, setNumber] = useState(0);
    
    const aumentar = () => {
        setNumber(number + 1);
    }

    return (
        <Fragment>
            <h3>Mi primer componente {number}</h3>
            <button onClick={aumentar}>Aumentar</button>
        </Fragment>
    );
}

export default Counter;