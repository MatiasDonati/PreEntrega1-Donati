import { useState } from "react";
import { useCart } from "../context/CartContext";

const ItemCount = ({ stock }) => {

    const { sumarCantidad,restarCantidad, reset, contador } = useCart()



    return (
        <>
            <div className="text-center">
                <div className="flex justify-center space-x-4">
                    <button onClick={restarCantidad} className="bg-violet-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">-</button>
                    <p>{contador}</p>
                    {contador == stock ? <button disabled={true} onClick={sumarCantidad} className="bg-violet-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">+</button> : <button onClick={sumarCantidad} className="bg-violet-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">+</button>}
                </div>
                <br />
                <button onClick={reset} className="bg-violet-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">Volver a Uno</button>
            </div>
        </>
    )
}
export default ItemCount