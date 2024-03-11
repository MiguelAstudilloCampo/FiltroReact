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
    { id: "5", nombre: "Juan", apellido: "Ramírez", descripcion: "Programador y gamer" },
    { id: "6", nombre: "María", apellido: "Rodríguez", descripcion: "Viajera y amante de la música" },
    { id: "7", nombre: "Pedro", apellido: "Sánchez", descripcion: "Cocinero profesional" },
    { id: "8", nombre: "Sofía", apellido: "Pérez", descripcion: "Ingeniera de software" },
    { id: "9", nombre: "Gabriel", apellido: "Fernández", descripcion: "Estudiante de medicina" },
    { id: "10", nombre: "Elena", apellido: "Díaz", descripcion: "Artista plástica" },
    { id: "11", nombre: "Adrián", apellido: "Hernández", descripcion: "Entusiasta del deporte" }
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

