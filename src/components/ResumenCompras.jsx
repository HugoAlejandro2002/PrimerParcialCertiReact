import React from 'react';

export const ResumenCompras = ({ compras }) => {
  const totalGastado = compras.reduce((total, compra) => total + compra.precio, 0);
  const cantidadItems = compras.length;

  return (
    <div className="w-1/2 h-screen p-4">
      <h2>Resumen de Compras</h2>
      <p>Total gastado: ${totalGastado}</p>
      <p>Cantidad de items comprados: {cantidadItems}</p>
    </div>
  );
};
