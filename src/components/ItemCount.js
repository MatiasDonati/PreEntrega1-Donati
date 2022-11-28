import { useState } from "react";
import { IconName } from "react-icons/io";

const ItemCount = ({stock}) => {

    const [contador, setContador] = useState(1)

    const cuentaClick = () => {
        console.log(`Se hizo click ${contador} veces`);
        console.log(stock);
        setContador(contador + 1)
        if(contador+1==stock){
            console.log('STOCK Y CONTADOR IGUALES');
        }
    }

    const restaClick = () => {
        if (contador != 0) {
            setContador(contador - 1)
        }
    }

    const reset = () => {
        console.log('Se Reseteo');
        setContador(0)
    }

    return (
        <>
            <div className="text-center">
                <div className="flex justify-center space-x-4">
                    <button onClick={restaClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">-</button>
                    <p>{contador}</p>
                    <button onClick={cuentaClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">+</button>
                </div>
                <br />
                <button onClick={reset} className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">Volver a Cero</button>
            </div>
        </>
    )
}
export default ItemCount