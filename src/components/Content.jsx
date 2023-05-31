import React, { useState } from 'react'
import { Compras } from "./Compras";
import { ResumenCompras } from './ResumenCompras';
import { FaPlus } from 'react-icons/fa';
import { IconButton } from './IconButton';

export const Content = () => {
    const comprasArrayString = localStorage.getItem('comprasArray');
    const comprasArray = JSON.parse(comprasArrayString);

    const [compras, setCompras] = useState(localStorage.getItem('comprasArray') ? comprasArray : []);
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="flex flex-col-reverse md:flex-row p-4">
                <Compras compras={compras} setCompras={setCompras} setShowModal={setShowModal} showModal={showModal} />
                <ResumenCompras compras={compras} />
            </div>
            <div className="absolute right-3 bottom-3 w-10 h-10">
                <IconButton icon={FaPlus} onClick={() => setShowModal(true)} />
            </div>
        </>
    )
}