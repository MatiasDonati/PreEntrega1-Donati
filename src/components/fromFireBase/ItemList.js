import { useEffect, useState } from "react"
import { getFirestore, doc, getDoc, collection, getDocs, where, query, limit } from "firebase/firestore"
import { logEvent } from "firebase/analytics"
import { async } from "@firebase/util"

const ItemList = () => {

    const [item, seItem] = useState()
    const [items, seItems] = useState()
    const [itemCategoria, setItemCategoria] = useState()
    const [itemCategoria2, setItemCategoria2] = useState()

    useEffect(() => {
        getItemData()
        getItems()
        getCategory()
        getCategory2()
    }, [])

    const getItemData = () => {
        const db = getFirestore()
        const docRef = doc(db, 'items', '7XwBYvlQqYz05Wqzmy8y')
        getDoc(docRef).then(snapshot => {
            seItem({ id: snapshot.id, ...snapshot.data() });
        })
    }

    const getItems = async () => {
        const db = getFirestore()
        const collectionRef = collection(db, 'items')
        const snapshot = await getDocs(collectionRef)
        seItems(snapshot.docs.map(doc => ({ id: doc.data, ...doc.data() })))
    }

    const getCategory = () => {
        const categoria = 'pintura'
        const db = getFirestore()
        const q = query(collection(db, 'items'),
        where('category', '==', categoria),limit())
        getDocs(q).then((snapshot)=> {
            if(snapshot.size === 0){
                console.log('No hay resultados');
            }
            setItemCategoria(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()})))
        })
    }
    const getCategory2 = () => {
        const categoria = 'ilustracion'
        const db = getFirestore()
        const q = query(collection(db, 'items'),
        where('category', '==', categoria),limit())
        getDocs(q).then((snapshot)=> {
            if(snapshot.size === 0){
                console.log('No hay resultados');
            }
            setItemCategoria2(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()})))
        })
    }

    return (
        <div className="text-xl m-10">
            <h1>
                Detalle de un producto
            </h1>
            <br />
            {item && <>
                <p>{item.title}</p>
                <p>{item.price}</p>
                <p>{item.description}</p>
                <img src={item.pictureUrl}></img>
                <br />
            </>}
            <h1>Todos</h1>
            {items && items.map(i => <li key={i.id}>Prodcutos Gral: "{i.title}" y su categoria es: {i.category}</li>)}
            <br />
            <h1>Filtrados por Pinturas</h1>
            {itemCategoria && itemCategoria.map(i=><li key={i.id}>{i.title} // {i.category} -- filtrando por categoria: "{i.category.toUpperCase()}"</li>)}
            <br />
            <h1>Filtrados por Ilustraciones</h1>
            {itemCategoria2 && itemCategoria2.map(i=><li key={i.id}>{i.title} // {i.category} -- filtrando por categori: "{i.category.toUpperCase()}"</li>)}
        </div>
    )
}
export default ItemList