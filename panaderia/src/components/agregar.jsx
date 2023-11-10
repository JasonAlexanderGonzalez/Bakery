import React, { useState } from 'react';
import './agregar.css';
import swal from 'sweetalert'; // Importar SweetAlert

const Agregar = () => {
  const [costo, setCosto] = useState('');

  const handleCostoChange = (e) => {
    setCosto(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      costo: costo,
    };

    try {
      const response = await fetch('/api/precios/agregar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Mostrar SweetAlert de éxito cuando el precio se agregue correctamente
        swal('Precio agregado', 'El precio ha sido agregado exitosamente', 'success');
        // Actualizar el estado o realizar otras acciones si es necesario
      } else {
        console.error('Error al agregar el precio');
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }

    // Limpiar el campo de input después de enviar el formulario
    setCosto('');
  };

  return (
    <form onSubmit={handleSubmit} className="agregar-form">
      <label>
        Costo:
        <input type="number" value={costo} onChange={handleCostoChange} />
      </label>
      <button type="submit">Agregar</button>
    </form>
  );
};

export default Agregar;
