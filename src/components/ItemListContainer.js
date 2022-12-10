import ItemList from "./ItemList"

const ItemListContainer = ( { greeting } ) => {
  return (
    <>
    <div className='text-center'><strong>{greeting}</strong></div>
    <ItemList />
    </>
  )
}
export default ItemListContainer