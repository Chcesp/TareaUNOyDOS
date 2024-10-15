import { useState } from "react";
const Counter = () => {
    const [number,setNumber] = useState(0);

    const sumar = () => {
        setNumber(number + 1);
        
    }

    const restar = () => {
        setNumber(number - 1);

    }

    return (
        <div>
            <center>
                <h1>Ejemplo de contador utilizando useState (estado)</h1>
                <h2>{number}</h2>
                <button onClick={sumar}> SUMAR </button>
                <button onClick={restar}> RESTAR </button>
            </center>
        </div>
    )
};
export default Counter;