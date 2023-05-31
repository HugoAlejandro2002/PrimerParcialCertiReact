import React, { useEffect, useState } from 'react';

export const ResumenCompras = ({ compras }) => {

  const [totalGastado,setTotalGastado] = useState(0);
  const [cantidadItems, setCantidadItems] = useState(0);
 
  useEffect(() => {
    const totalGastado = compras.reduce((total, compra) => total + compra.precio, 0);
    const cantidadItems = compras.length;
    setTotalGastado(totalGastado)
    setCantidadItems(cantidadItems)
  }, [compras])


  return (
    <div className="w-1/2 h-screen p-4">
      <h2 className="text-2xl font-medium mb-4">Resumen de Compras</h2>
      <p className="mb-2">Total gastado: ${totalGastado}</p>
      <p>Cantidad de items comprados: {cantidadItems}</p>
    </div>
  );
};
