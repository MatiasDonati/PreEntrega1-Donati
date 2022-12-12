import { useParams } from "react-router-dom"
import ItemList from "./ItemList"

const ItemListContainer = ( { greeting } ) => {

  const {id} = useParams()
  console.log(id);

  return (
    <>
    <div className='text-center'><strong>{greeting}</strong></div>
    <ItemList id={id}/>
    </>
  )
}
export default ItemListContainer