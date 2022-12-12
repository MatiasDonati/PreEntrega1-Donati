import { useEffect, useState } from "react"
import { PRODUCTS } from "../data/products";
import Item from "./Item";
import yanilog1 from "../images/yanilog1.jpg"
import piesYaniLog from '../images/piesYaniLog.jpeg'


const ItemList = ({id}) => {

    console.log(id);
    const [products, setProducts] = useState([])

    useEffect(() => {

        getProducts().then(response => {
            setProducts(response)
        })
    }, [id])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(id){
                    resolve(PRODUCTS.filter(product => product.category == id))
                }else{
                    resolve(PRODUCTS)
                }
            }, 250);
        })
    }

    return (
        <>
            <div className="text-center p-14">
            <h1><strong>{id}</strong></h1>
                <div className="flex flex-wrap p-10">
                    {products.map(product => <Item key={product.id} {...product} />)}
                </div>
            </div>
        </>
    )
}
export default ItemList