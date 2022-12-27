import { useEffect, useState } from "react"
import { getFirestore, doc, getDoc, collection, getDocs, where, query, limit } from "firebase/firestore"
import { logEvent } from "firebase/analytics"
import { async } from "@firebase/util"


const ItemList = () => {

    const [item, seItem] = useState()
    const [items, seItems] = useState()
    const [itemCategoria, setItemCategoria] = useState()

    useEffect(() => {
        getItemData()
        getItems()
        getCategory()
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

    console.log(items);
    console.log(item);

    return (
        <div className="text-xl m-10">
            <h1>
                Producto destacado
            </h1>
            {item && <>
                <p>{item.title}</p>
                <p>{item.price}</p>
                <p>{item.description}</p>
                <img src={item.pictureUrl}></img>
            </>}
            {items && items.map(i => <li key={i.id}>{i.title}</li>)}
            {itemCategoria && itemCategoria.map(i=><li key={i.id}>{i.title} // {i.category}</li>)}
        </div>
    )
}
export default ItemList