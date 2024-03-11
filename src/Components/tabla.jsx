import React, { useState } from 'react';
import "./Style/Tabla.css"

const Tabla = ({ personas }) => {
    return (
        <div className='container-tabla'>
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Nombre</td>
                        <td>Apellido</td>
                        <td>Descripcion</td>
                    </tr>
                </thead>
                <tbody>
                    {personas.map((persona) => (
                        <tr key={persona.id}>
                            <td>{persona.id}</td>
                            <td>{persona.nombre}</td>
                            <td>{persona.apellido}</td>
                            <td>{persona.descripcion}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
}

export default Tabla;