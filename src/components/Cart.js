
import { useCart } from "../context/CartContext"
import ProductoEnCart from "./ProductoEnCart"

const Cart = () => {

  const { items, carroVacio , clearCart } = useCart()
  console.log(carroVacio);

  console.log(items);
  return (
    <div className="m-10 text-xl">
      <strong>Cart</strong>
      {carroVacio ? <p>No tienes Obras en el Carrito</p> : <></>}
      <p>{ items.map( product =>  <ProductoEnCart key={product.id} {...product}/>) }</p>
      <button className="btn" onClick={clearCart}>Vaciar Carrito</button>
    </div>
  )
}
export default Cart