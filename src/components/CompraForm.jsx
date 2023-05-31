import React, { useEffect, useState } from 'react';

export const CompraForm = ({ agregarCompra, compra, editMode }) => {
  const [nombre, setNombre] = useState(localStorage.getItem('nombre') || '');
  const [precio, setPrecio] = useState(localStorage.getItem('precio') || '');

  useEffect(() => {
    if (editMode && compra) {
      setNombre(compra.nombre);
      setPrecio(compra.precio.toString());
    }
  }, [editMode, compra]);

  useEffect(() => {
    console.log('cambio en el form');

    // Guardar los datos del formulario en el localStorage
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('precio', precio);
  }, [nombre, precio]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.trim() === '' || precio.trim() === '') {
      return;
    }

    const nuevaCompra = {
      nombre,
      precio: parseFloat(precio),
    };

    agregarCompra(nuevaCompra);

    setNombre('');
    setPrecio('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="nombre" className="block font-medium mb-1">
          Nombre del producto:
        </label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="precio" className="block font-medium mb-1">
          Precio del producto:
        </label>
        <input
          type="number"
          id="precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
      >
        Agregar compra
      </button>
    </form>
  );
};
