import {useContext} from 'react';
import { Globalcontext } from '../context/Globalcontext';

const Input = ({buscador}) => {
    
    // const [filtro, setFiltro] = useState("");

    const { filtro, setFiltro } = useContext(Globalcontext)

    const handleFiltroChange = (e) => {
        const buscadorValue = e.target.value;
        setFiltro(buscadorValue);
        buscador(buscadorValue)
      };

    return (
        <div>
        <input 
        type="text"
        placeholder="Busca por nombre, apellido o descripción"
        value={filtro}
        onChange={handleFiltroChange}
      />
        </div>
    );
}

export default Input;
