import { useEffect, useState } from "react"
import { PRODUCTS } from "../data/products";
import Item from "./Item";
import GridLoader from "react-spinners/ClipLoader";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemList = ({products, loading}) => {

    return (
        <>
            <div className="text-center p-14">
                {loading ?
                    <div className="p-20">
                        <GridLoader
                            color="#724b80"
                            cssOverride={{}}
                            loading
                            margin={5}
                            size={50}
                        />
                    </div>
                    :
                    <div className="flex flex-wrap p-10">
                        {products.map(product => <Item key={product.id} {...product} />)}
                    </div>
                }
            </div>
        </>
    )
}
export default ItemList