import React, { useState } from 'react'
import { Compras } from "./Compras";
import { ResumenCompras } from './ResumenCompras';


export const Content = () => {
    const comprasArrayString = localStorage.getItem('comprasArray');
    const comprasArray = JSON.parse(comprasArrayString);
    
    const [compras, setCompras] = useState(localStorage.getItem('comprasArray')? comprasArray : []);
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="flex flex-row">
            <Compras compras={compras} setCompras={setCompras} setShowModal={setShowModal} showModal={showModal} />
            <ResumenCompras compras={compras} />
        </div>
    )
}