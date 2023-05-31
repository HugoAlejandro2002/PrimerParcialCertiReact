import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

export const CompraCard = ({ compra, onEditar, onEliminar }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 mb-4 flex justify-between items-center">
      <div>
        <h3 className="text-lg font-medium mb-2">{compra.nombre}</h3>
        <p className="text-gray-600">Precio: {compra.precio}</p>
      </div>
      <div>
        <button
          className="text-blue-500 mr-2"
          onClick={() => onEditar(compra)}
        >
          <FaEdit />
        </button>
        <button
          className="text-red-500"
          onClick={() => onEliminar(compra)}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};
