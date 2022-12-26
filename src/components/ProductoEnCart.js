import { useEffect } from "react"
import { useCart } from "../context/CartContext"

const ProductoEnCart = ({ pictureUrl, title, price, stock, id, inCart, contador, cantidad}) => {

    const { eliminarDelCart, agregarCantidad, restarCantidad } = useCart()

    console.log(cantidad);

    const borrarDelCarro = () => {
        eliminarDelCart(id)
    }

    const agregarCantidadHandler = () => {
        agregarCantidad(id)
    }

    const restarCantidadHandler = () => {
        restarCantidad(id)
    }

    return (
        <>
            <div className="p-10">
                <div className="card w-96 h- glass">
                    <figure><img src={pictureUrl} alt="img" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">"{title}"</h2>
                        <p>${price}</p>
                        <p>Cantidad: {cantidad}</p>
                        <div className="content-center">
                            <button className="bg-violet-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={restarCantidadHandler}>-</button>
                            <button className="bg-violet-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={agregarCantidadHandler}>+</button>
                        </div>
                        {/* {
                            cantidad > 1 &&
                            <div className="content-center">
                                <button className="bg-violet-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={restarCantidadHandler}>-</button>
                            </div>} */}
                    </div>
                    {price > 2000 && <p className="p-5 text-base">Envio gratis</p>}
                    <button className="btn" onClick={borrarDelCarro}>Eliminar del Carrito</button>
                </div>
            </div>
        </>
    )
}
export default ProductoEnCart