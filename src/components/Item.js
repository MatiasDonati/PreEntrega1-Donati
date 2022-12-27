import { useState } from "react"
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

const Item = ({ id, title, description, price, pictureUrl, stock, category, loading }) => {

  const { resetearContador } = useCart()

  return (
    <>
      <div className="p-2">
        <div className="card w-96 glass">
          <figure><img src={pictureUrl} alt="img" /></figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <p>{category}</p>
            <p>${price}</p>
            <div className="card-actions justify-end">
              {/* <ItemCount stock={stock}/> */}
            </div>
            <Link to={`/item/${id}`} onClick={resetearContador} className='btn'>Ver detalle</Link>
          </div>
        </div>
      </div>
    </>
  )
}
export default Item