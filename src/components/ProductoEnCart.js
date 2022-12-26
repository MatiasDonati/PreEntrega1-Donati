import { useCart } from "../context/CartContext"
import ItemCount from "./ItemCount"

const ProductoEnCart = ({ pictureUrl, title, price, stock, id, inCart, contador, cantidad }) => {

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
                        {/* {inCart==true && <p className="text-sm">Ya estaba Agregado</p>} */}
                    </div>
                    {price > 2000 && <p className="p-5 text-base">Envio gratis</p>}
                    <button className="btn" onClick={borrarDelCarro}>Eliminar del Carrito</button>
                </div>
            </div>
        </>
    )
}
export default ProductoEnCart