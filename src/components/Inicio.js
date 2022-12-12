import { useEffect, useState } from "react"
import { PRODUCTS } from "../data/products";
import Item from "./Item";
import piesYaniLog from '../images/piesYaniLog.jpeg'


const Inicio = () => {

    const [products, setProducts] = useState([])
    const [boton, setBoton] = useState(false)

    useEffect(() => {

        getProducts().then(response => {
            setProducts(response)
        })
    }, [])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve(PRODUCTS)
            }, 250);
        })
    }

    const verOnoVer = () => {
        if (boton == false) {
            setBoton(true)
        } else {
            setBoton(false)
        }
    }

    return (
        <>
            <div className="p-5">
                <img src={piesYaniLog} alt="" className="mx-auto rounded-full p-2"></img>
            </div>
            <div className="text-center p-14">
                {boton == false ? <button onClick={verOnoVer} className="btn bg-violet-700 hover:bg-pink-300 text-white font-bold py-2 px-4 rounded-full ">Ver Obra</button> : <button onClick={verOnoVer} className="btn bg-violet-700 hover:bg-pink-300 text-white font-bold py-2 px-4 rounded-full">Ocultar Obra</button>}
                {boton == true ? <div className="flex flex-wrap p-10">
                    {products.map(product => <Item key={product.id} {...product} />)}
                </div> : <div></div>}
                {boton == false ? <div></div> : <button onClick={verOnoVer} className="btn bg-violet-700 hover:bg-pink-300 text-white font-bold py-2 px-4 rounded-full">Inicio</button>}
            </div>
        </>
    )
}
export default Inicio