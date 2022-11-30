import { useEffect } from "react"

const ItemDetailContainer = () => {

  useEffect(() => {
    verDetalle()
  }, [])

  const producto1 = {
    title: 'Sarasa'
  }


  const verDetalle = () => {

  }

  return (
    <div>ItemDetailContainer</div>
  )
}
export default ItemDetailContainer