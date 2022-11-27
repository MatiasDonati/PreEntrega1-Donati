import { useEffect, useState } from "react"
import Item from "./Item";

const ItemList = () => {


    //  http://drive.google.com/uc?export=view&id={ACA VA EL ID}
    // Asi viene el link desde Drive --> https://drive.google.com/file/d/16C1wM1FVC4vMwQ4WGE5UzmlNZLQFOtVA/view?usp=share_link
    // Poner asi --> https://drive.google.com/uc?export=view&id=16C1wM1FVC4vMwQ4WGE5UzmlNZLQFOtVA

    const PRODUCTS = [
        {
            id: 1,
            title: 'El',
            stock: 12,
            price: 1200,
            description: 'Arte digital donde los pies son el foco del a acción',
            pictureUrl: 'https://drive.google.com/uc?export=view&id=16C1wM1FVC4vMwQ4WGE5UzmlNZLQFOtVA'
        },
        {
            id: 2,
            title: 'Lineas Interlocutoras',
            stock: 14,
            price: 1400,
            description: `Entre lineas a veces se codifican señales, entre locutores se entienden`,
            pictureUrl: 'https://drive.google.com/uc?export=view&id=1KfgDJPnKZ3F6Eme0jHzcBCfZbENgF7Vh'
        },
        {
            id: 3,
            title: 'Ellas',
            stock: 0,
            price: 2000,
            description: `Las manos humanas tienen varias formas, la predominante no es esta`,
            pictureUrl: 'https://drive.google.com/uc?export=view&id=1DG2_VA_CQaEnybEZp5eBkUP61EqPCrlh'
        },
        {
            id: 4,
            title: 'Un barco en la avenida',
            stock: 15,
            price: 1000,
            description: `No hace falta explicar nada`,
            pictureUrl: 'https://drive.google.com/uc?export=view&id=1Vh7unNSIcbAlXlDq3yIDCk4QDHBWpzxt'
        }
    ]

    const [products, setProducts] = useState([])

    useEffect(() => {
        console.log('comienza getProducts');
        getProducts().then(response => {
            console.log(response);
            setProducts(response)
        })
        console.log('termina getProducts');
    }, [])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(PRODUCTS)
            }, 2000);
        })
    }


    return (
        <div className="text-center">
            <h1>Ilustraciones</h1>
            <div className="flex flex-wrap p-10">
                {products.map(product => <Item key={product.id} {...product} />)}
            </div>
        </div>
    )
}
export default ItemList