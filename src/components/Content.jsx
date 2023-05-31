import React, { useState } from 'react'
import { Compras } from "./Compras";
import { ResumenCompras } from './ResumenCompras';


export const Content = () => {
    const [compras, setCompras] = useState([]);
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="flex flex-row">
            <Compras compras={compras} setCompras={setCompras} setShowModal={setShowModal} showModal={showModal}/>
            <ResumenCompras compras={compras}  />
        </div>
    )
}