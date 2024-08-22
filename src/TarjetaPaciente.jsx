import React from 'react';
import "./TarjetaPaciente.css"

const TarjetaPaciente = ({ nombre, edad, cedula, sintomas, diagnostico, fechaIngreso, }) => {
    // Lógica sencilla para determinar la gravedad
    const gravedad = sintomas.toLowerCase().includes('grave') ? 'Grave' : 'Leve';


    return (
        <div style={styles.tarjeta}>
            <h2 style={styles.titulo}>{nombre}</h2>
            <p><strong>Edad:</strong> {edad} años</p>
            <p><strong>Cédula:</strong> {cedula}</p>
            <p><strong>Síntomas:</strong> {sintomas}</p>
            <p><strong>Diagnóstico:</strong> {diagnostico}</p>
            <p><strong>Fecha de Ingreso:</strong> {new Date(fechaIngreso).toLocaleDateString()}</p>
            <div style={{ ...styles.barraEstado, backgroundColor: gravedad === 'Grave' ? 'red' : 'green' }}>
                {gravedad}
            </div>
        </div>
    );
};

const styles = {
    tarjeta: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        margin: '10px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    },
    titulo: {
        margin: '0 0 10px 0',
    },
    barraEstado: {
        color: 'white',
        padding: '5px',
        textAlign: 'center',
        borderRadius: '4px',
        marginTop: '10px',
    },
};

export default TarjetaPaciente;