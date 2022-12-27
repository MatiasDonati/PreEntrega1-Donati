import { useEffect, useState } from "react"
import { useCart } from "../context/CartContext"

const ProductoEnCart = ({ pictureUrl, title, price, stock, id, inCart, contador, cantidad, totalPrice}) => {

    const { eliminarDelCart } = useCart()

    const borrarDelCarro = () => {
        eliminarDelCart(id)
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
                        {stock==cantidad && <p>Estas comprando todo el Stock!</p>}
                    </div>
                    {totalPrice >= 5000 && <p className="p-5 text-base">Envio gratis</p>}
                    <button className="btn" onClick={borrarDelCarro}>Eliminar del Carrito</button>
                </div>
            </div>
        </>
    )
}
export default ProductoEnCart