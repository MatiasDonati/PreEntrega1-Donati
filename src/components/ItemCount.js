import { useState } from "react";

const ItemCount = ({ stock }) => {

    const [contador, setContador] = useState(1)

    const cuentaClick = () => {
        setContador(contador + 1)
        contador + 1 == stock ? console.log('STOCK Y CONTADOR IGUALES') : console.log('');
    }

    const restaClick = () => {
        if (contador != 1) {
            setContador(contador - 1)
        }
    }

    const reset = () => {
        console.log('Se Reseteo');
        setContador(1)
    }

    return (
        <>
            <div className="text-center">
                <div className="flex justify-center space-x-4">
                    <button onClick={restaClick} className="bg-violet-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">-</button>
                    <p>{contador}</p>
                    {contador == stock ? <button disabled={true} onClick={cuentaClick} className="bg-violet-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">+</button> : <button onClick={cuentaClick} className="bg-violet-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">+</button>}
                </div>
                <br />
                <button onClick={reset} className="bg-violet-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">Volver a Uno</button>
            </div>
        </>
    )
}
export default ItemCount