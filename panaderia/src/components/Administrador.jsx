import React, { useState } from 'react';
import axios from 'axios';


const Administrador = () => {
  const [costo, setCosto] = useState('');

  const handleInputChange = (event) => {
    setCosto(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Make a POST request to the backend API to add the new price
    axios
      .post('http://localhost:5000/api/precios', { costo })
      .then((response) => {
        console.log(response.data); // The response from the backend API
        // Perform any additional actions or show success message as needed
      })
      .catch((error) => {
        console.error('Error while adding the price:', error);
        // Handle error scenarios or show error messages
      });
  };

  return (
    <div>
      <h2>Administrator Panel</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Costo:
          <input type="number" value={costo} onChange={handleInputChange} />
        </label>
        <button type="submit">Agregar Precio</button>
      </form>
    </div>
  );
};

export default Administrador;
