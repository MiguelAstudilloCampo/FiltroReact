import { useState, useContext } from 'react'
import './App.css'
import Input from './Components/input';
import Tabla from './Components/tabla';
import { Globalcontext } from './context/Globalcontext';
import NumdeRegistros from './Components/NumdeRegistros';

function App() {

  const { filtro, setFiltro } = useContext(Globalcontext)

  const [contador, setContador] = useState(5);


  const [personasIniciales] = useState([
    { id: "1", nombre: "Miguel", apellido: "Angel", descripcion: "Estudio Adso" },
    { id: "2", nombre: "Ana", apellido: "González", descripcion: "Trabaja como ingeniera" },
    { id: "3", nombre: "Carlos", apellido: "Martínez", descripcion: "Apasionado por la fotografía" },
    { id: "4", nombre: "Laura", apellido: "López", descripcion: "Estudiante de arquitectura" },
    { id: "5", nombre: "Juan", apellido: "Ramírez", descripcion: "Programador y gamer" },
    { id: "6", nombre: "María", apellido: "Rodríguez", descripcion: "Viajera y amante de la música" },
    { id: "7", nombre: "Pedro", apellido: "Sánchez", descripcion: "Cocinero profesional" },
    { id: "8", nombre: "Sofía", apellido: "Pérez", descripcion: "Ingeniera de software" },
    { id: "9", nombre: "Gabriel", apellido: "Fernández", descripcion: "Estudiante de medicina" },
    { id: "10", nombre: "Elena", apellido: "Díaz", descripcion: "Artista plástica" },
    { id: "11", nombre: "Adrián", apellido: "Hernández", descripcion: "Entusiasta del deporte" },
    { id: "12", nombre: "Manuel", apellido: "Emiliano", descripcion: "Estudio Agronomia" },
    { id: "13", nombre: "Jose", apellido: "Lopez", descripcion: "Trabaja arquitecta" },
    { id: "14", nombre: "Libny", apellido: "Dorado", descripcion: "Apasionada por los carros" },
    { id: "15", nombre: "Emmanuel", apellido: "Astaiza", descripcion: "Estudiante de ing civil" },
    { id: "16", nombre: "Emailiano", apellido: "Ramírez", descripcion: "gamer de LOL" },
    { id: "17", nombre: "Fransisco", apellido: "Perez", descripcion: "Viajero y Conocedor de paises " },
    { id: "18", nombre: "Valentina", apellido: "Carrrasquilla", descripcion: "Chef" },
    { id: "19", nombre: "Gabriela", apellido: "Reina", descripcion: "Ingeniero mecatronica" },
    { id: "20", nombre: "Cesar", apellido: "Fernández", descripcion: "Estudiante de enfermeria" }
]);

  const buscador = (buscadorValue) =>{
    setFiltro(buscadorValue)
  }

  const handleContadorChange = (e) => {
    setContador(Number(e.target.value));
  };

  const opcionesContador = [5, 10, 15, 20];
  
  const personasFiltradas = personasIniciales.filter(persona =>
    persona.id.includes(filtro) ||
    persona.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
    persona.apellido.toLowerCase().includes(filtro.toLowerCase()) ||
    persona.descripcion.toLowerCase().includes(filtro.toLowerCase()) 
  )
  .slice(0, contador);

  return (
    <div className='Container'>
      <Input buscador={buscador}></Input>

      <div className='slect'>
        <h4>Filtra tus registros</h4>
        <select value={contador} onChange={handleContadorChange}>
          {opcionesContador.map((opcion) => (
            <option key={opcion} 
              value={opcion}>
              {opcion}
            </option>
          ))}
        </select>
      </div>
      <Tabla personas={personasFiltradas}></Tabla>

      <NumdeRegistros
        totalRegistros={personasFiltradas.length}
        personasTotales={personasIniciales.length}
      />
    </div>
  );
}

export default App;

