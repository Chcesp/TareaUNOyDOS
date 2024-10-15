
export const Usuario = ({ nombre, cedula, materia }) => {
    //se pone dentro de las llaves corchetes las variables del objeto, esto para no tener que poner props.nombre y simplificar
    return <div>
        <h1>Alumno: {nombre} </h1>
        <p>Cedula:    {cedula} </p>
        <p>Materia: {materia}</p>
        <hr></hr>
    </div>
}