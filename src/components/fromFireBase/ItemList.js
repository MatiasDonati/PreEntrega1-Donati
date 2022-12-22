import { useEffect, useState } from "react"
import { getFirestore, doc, getDoc, collection, getDocs } from "firebase/firestore"
import { logEvent } from "firebase/analytics"
import { async } from "@firebase/util"


const ItemList = () => {

    const [item, seItem] = useState()
    const [items, seItems] = useState()

    useEffect(() => {
        getItemData()
        getItems()
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
        seItems(snapshot.docs.map(d => ({ id: d.data, ...d.data() })))
    }

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
            {items &&  items.map(i => <li key={i.id}>{i.title}</li>)}
        </div>
    )
}
export default ItemList