
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"
import ProductoEnCart from "./ProductoEnCart"

const Cart = () => {

  const { items, carroVacio, clearCart } = useCart()
  console.log(carroVacio);

  let totalPrice = items.reduce((acc, item) => acc + item.price, 0);

  console.log(items.length);
  return (
    <div className="m-10 text-xl">
      <strong>Carrito de Compras</strong>
      <br />
      {totalPrice > 0 && <strong>Precio total: $ {totalPrice}</strong>}
      <p>{items.map(product => <ProductoEnCart key={product.id} {...product} />)}</p>
      {carroVacio==true ?
      <>
      <p>El carrito se encuentra vacío</p>
      <Link to='/'><button className="btn">Ir a comprar</button></Link>
      </>
      :
      <button className="btn" onClick={clearCart}>Vaciar Carrito</button>
      }
    </div>
  )
}
export default Cart