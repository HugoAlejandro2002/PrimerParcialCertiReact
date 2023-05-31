import React, { useState } from 'react';
import { IconButton } from './IconButton';
import { CompraForm } from './CompraForm';
import { Modal } from './Modal';
import { CompraCard } from './CompraCard';
import { FaPlus } from 'react-icons/fa';

export const Compras = ({ compras, setCompras, showModal, setShowModal }) => {
  const [editMode, setEditMode] = useState(false);
  const [editItem, setEditItem] = useState(null); // Agrega esta línea

  const agregarCompra = (compra) => {
    if (editMode) {
      actualizarCompra(compra);
    } else {
      setCompras([...compras, compra]);
    }
    setEditItem(null);
    setEditMode(false);
  };

  const editarCompra = (compra) => {
    setEditItem(compra);
    setEditMode(true);
    setShowModal(true);
  };

  const actualizarCompra = (compraActualizada) => {
    const comprasActualizadas = compras.map((compra) =>
      compra.id === compraActualizada.id ? compraActualizada : compra
    );
    setCompras(comprasActualizadas);
    setEditItem(null);
    setEditMode(false);
    setShowModal(false)
  };

  const eliminarCompra = (compra) => {
    const nuevaLista = compras.filter((compraUni) => compraUni.id !== compra.id);
    setCompras(nuevaLista);
  };

  return (
    <>
      <div>Compras</div>
      <div className="absolute right-3 bottom-3 w-10 h-10">
        <IconButton icon={FaPlus} onClick={() => setShowModal(true)} />
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CompraForm
            compra={editItem}
            editMode={editMode}
            agregarCompra={agregarCompra}
          />
        </Modal>
      )}
      <div className="w-1/2 h-screen overflow-y-auto">
        {compras.map((compra, index) => (
          <CompraCard
            key={index}
            compra={compra}
            onEditar={editarCompra}
            onEliminar={eliminarCompra}
          />
        ))}
      </div>
    </>
  );
};
