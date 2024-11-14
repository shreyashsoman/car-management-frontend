import React, { useState } from 'react';
import { createCar } from '../services/carService';

function ProductCreationPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleCreateCar = async () => {
    try {
      const carData = { title, description };
      const token = localStorage.getItem('token');
      await createCar(carData, token);
      setMessage("Car created successfully!");
    } catch (error) {
      setMessage(`Error: ${error}`);
    }
  };

  return (
    <div>
      <h2>Create Product</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleCreateCar}>Create</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default ProductCreationPage;
