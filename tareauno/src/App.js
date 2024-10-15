
import Pokemon_API from './Componentes/API';
import Counter from './Componentes/Counter';
import { Encabezado } from './Componentes/Encabezado/Encabezado';
import { Usuario } from './Componentes/Usuario';

    
function App() {    
        
    return (
        <div>
            <Encabezado />
            <Usuario nombre='Christian Cespedes Cubillo' cedula={110970383} materia='03101 Programacion Avanzada en Web' />
            <Counter />
            <Pokemon_API />
        </div>
  );
}
export default App;