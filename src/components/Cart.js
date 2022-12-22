
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"
import ProductoEnCart from "./ProductoEnCart"

const Cart = () => {

  const { items, carroVacio, clearCart } = useCart()
  console.log(carroVacio);

  let totalPrice = items.reduce((acc, item) => acc + item.price, 0);

  const makeOrder = () => {
    const user = {name: 'Juan', phone: 432432, email: 'juan@gmail.com'}
    const order = {
      buyer: user,
      items: items
    }
    console.log('Levantando orden:', order);
  }

  console.log(items.length);

  return (
    <div className="m-10 text-xl">
      <strong>Carrito de Compras</strong>
      <br />
      {totalPrice > 0 && <strong>Precio total: $ {totalPrice}</strong>}
      {totalPrice >= 5000 && <><p>Envio gratis!</p><p className="text-sm">Superaste los $5000!</p></>}
      <p>{items.map(product => <ProductoEnCart key={product.id} {...product} />)}</p>
      {carroVacio==true ?
      <>
      <p>El carrito se encuentra vacío</p>
      <Link to='/'><button className="btn">Ir a comprar</button></Link>
      </>
      :
      <>
      <button className="btn" onClick={clearCart}>Vaciar Carrito</button>
      <br />
      <br />
      <button className="btn" onClick={makeOrder}>Comprar</button>
      </>
      }
    </div>
  )
}
export default Cart