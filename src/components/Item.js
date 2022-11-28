import { useState } from "react"
import ItemCount from "./ItemCount"

const Item = ({ id, title, description, price, pictureUrl, stock }) => {

  const onAdd = () => {
    // La funcion se deje ejecutar si hay stocl, de lo contrario no!
    console.log({ id, title, stock });
    stock < 1 ? console.log('No hay stock.') : console.log('Hay Stock!');;
  }

  return (
    <>
      <div className="p-5">
        <div className="card w-96 glass">
          <figure><img src={pictureUrl} alt="img" /></figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <p>${price}</p>
            <div className="card-actions justify-end">
              <ItemCount stock={stock}/>
              <button onClick={onAdd} className="btn btn-primary">Comprar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Item