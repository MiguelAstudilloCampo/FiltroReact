import { useState, useContext } from 'react'
import './App.css'
import Input from './Components/input';
import Tabla from './Components/tabla';
import { Globalcontext } from './context/Globalcontext';

function App() {

  const { filtro, setFiltro } = useContext(Globalcontext)

  const personasIniciales = [
    { id: "1", nombre: "Miguel", apellido: "Angel", descripcion: "Estudio Adso" },
    { id: "2", nombre: "Ana", apellido: "González", descripcion: "Trabaja como ingeniera" },
    { id: "3", nombre: "Carlos", apellido: "Martínez", descripcion: "Apasionado por la fotografía" },
    { id: "4", nombre: "Laura", apellido: "López", descripcion: "Estudiante de arquitectura" },
    { id: "5", nombre: "Juan", apellido: "Ramírez", descripcion: "Programador y gamer" }
];

  const buscador = (buscadorValue) =>{
    setFiltro(buscadorValue)
  }
  


  const personasFiltradas = personasIniciales.filter(persona =>
    persona.id.includes(filtro) ||
    persona.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
    persona.apellido.toLowerCase().includes(filtro.toLowerCase()) ||
    persona.descripcion.toLowerCase().includes(filtro.toLowerCase()) 
  );

  return (
    <div className='Container '>
      <Input buscador={buscador}></Input>
      <Tabla personas={personasFiltradas}></Tabla>
    </div>
  );
}

export default App;

