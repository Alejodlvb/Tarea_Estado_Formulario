import React, { useState } from 'react';
import TarjetaPaciente from './TarjetaPaciente';
import "./Formulario.css"

const FormularioPacientes = () => {
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [cedula, setCedula] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [diagnostico, setDiagnostico] = useState('');
    const [fechaIngreso, setFechaIngreso] = useState('');
    const [pacientes, setPacientes] = useState([]);
    
    const [errores, setErrores] = useState({
        nombre: '',
        edad: '',
        cedula: '', 
        sintomas: "",
        diagnostico: '',
        fechaIngreso: '',
    });

    const manejarEnvio = (e) => {
        e.preventDefault();
        let validacionErrores = { nombre: '', edad: '', cedula: '', sintomas: "", diagnostico: '', fechaIngreso: '' };

        if (!nombre) validacionErrores.nombre = 'Por favor, ingrese el nombre del paciente.';
        if (!edad) validacionErrores.edad = 'Por favor, ingrese la edad del paciente.';
        if (!cedula) validacionErrores.cedula = 'Por favor, ingrese la cedula delpaciente.'
        if (!sintomas) validacionErrores.sintomas = 'Por favor, describa los síntomas del paciente.';
        if (!diagnostico) validacionErrores.diagnostico = 'Por favor, escriba el diagnostico del paciente.'
        if (!fechaIngreso) validacionErrores.fechaIngreso = 'Por favor, seleccione la fecha de ingreso.';

        setErrores(validacionErrores);

        if (!validacionErrores.nombre && !validacionErrores.edad && !validacionErrores.cedula && !validacionErrores.sintomas && !validacionErrores.diagnostico && !validacionErrores.fechaIngreso ) {
            const nuevoPaciente = { nombre, edad, cedula, sintomas, diagnostico, fechaIngreso };
            setPacientes([...pacientes, nuevoPaciente]);
            // Reiniciar el formulario
            setNombre('');
            setEdad('');
            setCedula('');
            setSintomas("");
            setDiagnostico('');
            setFechaIngreso('');
            setErrores({ nombre: '', edad: '', cedula:'', sintomas: "", diagnostico: '', fechaIngreso: '' }); // Limpiar errores
        }
    };
    

    return (
        <div id='formulario'>
            <h1>Datos del Paciente</h1>
            <form onSubmit={manejarEnvio}>
                <div id='nombre'>
                    <label id='nombre1'>Nombre:</label>
                    <input 
                        type="text" 
                        value={nombre} 
                        onChange={(e) => setNombre(e.target.value)} 
                        required 
                    />
                    {errores.nombre && <p style={{ color: 'red' }}>{errores.nombre}</p>}
                </div>
                <div id='edad'>
                    <label id='edad1'>Edad:</label>
                    <input 
                        type="number" 
                        value={edad} 
                        onChange={(e) => setEdad(e.target.value)} 
                        required 
                    />
                    {errores.edad && <p style={{ color: 'red' }}>{errores.edad}</p>}
                </div>
                <div id='cedula'>
                    <label id='cedula1'>Cédula:</label>
                    <input 
                        type="text" 
                        value={cedula} 
                        onChange={(e) => setCedula(e.target.value)} 
                        required 
                    />
                    {errores.cedula && <p style={{ color: 'red' }}>{errores.cedula}</p>}
                </div>
                <div id='sintomas'>
                    <label id='sintomas1'>Síntomas:</label>
                    <textarea 
                        value={sintomas} 
                        onChange={(e) => setSintomas(e.target.value)} 
                        required 
                    />
                    {errores.sintomas && <p style={{ color: 'red' }}>{errores.sintomas}</p>}
                </div>
                <div id='diagnostico'>
                    <label id='diagnostico1'>Diagnóstico:</label>
                    <input 
                        type="text" 
                        value={diagnostico} 
                        onChange={(e) => setDiagnostico(e.target.value)} 
                        required 
                    />
                    {errores.diagnostico && <p style={{ color: 'red' }}>{errores.diagnostico}</p>}
                </div>
                <div id='fecha'>
                    <label id='fecha1'>Fecha de Ingreso:</label>
                    <input 
                        type="date" 
                        value={fechaIngreso} 
                        onChange={(e) => setFechaIngreso(e.target.value)} 
                        required 
                    />
                    {errores.fechaIngreso && <p style={{ color: 'red' }}>{errores.fechaIngreso}</p>}
                </div>
                <button id='boton' type="submit">Agregar Paciente</button>
            </form>

            <h2>Lista de Pacientes</h2>
            <div>
                {pacientes.map((paciente, index) => (
                    <TarjetaPaciente 
                        key={index} 
                        nombre={paciente.nombre} 
                        edad={paciente.edad} 
                        cedula={paciente.cedula}
                        sintomas={paciente.sintomas}
                        diagnostico={paciente.diagnostico} 
                        fechaIngreso={paciente.fechaIngreso}
                    />
                ))}
            </div>
        </div>
    );
};

export default FormularioPacientes;