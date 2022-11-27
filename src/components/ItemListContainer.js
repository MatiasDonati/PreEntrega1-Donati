import ItemList from "./ItemList"

const ItemListContainer = ( { greeting } ) => {
  return (
    <>
    <div className='text-center'>{greeting}</div>
    <ItemList />
    </>
  )
}
export default ItemListContainer