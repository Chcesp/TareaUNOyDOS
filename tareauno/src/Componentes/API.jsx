import React, { useState,useEffect } from 'react'
function Pokemon_API() {
    const [data, setData] = useState("");
    const [id, setId] = useState(1);

    const Siguiente = () => {
        setId(id + 1);

    }
                    
    const Anterior = () => {
        if (id > 1)
        {
            setId(id - 1)
        }
    }
 
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/" + id)
            .then((Response) => Response.json())
            .then((data) => setData(data))
        }, [id]);
         

        if (data) {
        return (
            <div>{
                data &&
                <div>
                    <center>
                        <hr></hr>
                        <h1>Ejemplo de llamado a API (PokeAPI)</h1>
                        <h3>Puedes avanzar con el boton SIGUIENTE o ANTERIOR para conocer los diferentes personajes Pokemon</h3>
                            <h2>{data.name} </h2>
                            <img src={data.sprites.front_default} alt={data.name} />
                            <h2>Id: {data.id} </h2>
                            <h2>Experiencia:{data.base_experience} </h2>
                            <h2>Peso:{data.weight} </h2>   
                            <h2>Altura:{data.height} </h2>
                            <br />
                            {
                                id > 1 ? <button onClick={Anterior}> ANTERIOR </button> : <button disabled> ANTERIOR </button>
                            }
                            <button onClick={Siguiente}> SIGUIENTE </button>
                    </center>
                    </div>
            }
            </div>
        )
    }   
}
export default Pokemon_API;