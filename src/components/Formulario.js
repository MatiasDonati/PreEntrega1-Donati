import { useState } from "react";
import { Link } from "react-router-dom";
import GridLoader from "react-spinners/ClipLoader";

const Formulario = ({ makeOrder, ordenDeCompra, clearCart }) => {

    const [name, setName] = useState("");
    const [apellido, setApellido] = useState("");
    const [celular, setCelular] = useState("");
    const [tarjeta, setTarjeta] = useState("");
    const [correo, setCorreo] = useState("");
    const [orden, setOrden] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(`The name you entered was: ${name}`)
        console.log(name, apellido, celular, tarjeta, correo);
    }

    const compraGenerada = () => {
        setOrden(true)
        makeOrder()
        clearCart()
    }

    return (
        <>
            {orden === false ?
                <form onSubmit={handleSubmit} className="pt-20 pl-10">
                    <div className="flex flex-col">
                        <label className="py-4">Nombre:
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>
                        <label className="py-4">Apellido:
                            <input
                                type="text"
                                value={apellido}
                                onChange={(e) => setApellido(e.target.value)}
                            />
                        </label>
                        <label className="py-4">Celular:
                            <input
                                type="text"
                                value={celular}
                                onChange={(e) => setCelular(e.target.value)}
                            />
                        </label>
                        <label className="py-4">Numero de Tarjeta:
                            <input
                                type="text"
                                value={tarjeta}
                                onChange={(e) => setTarjeta(e.target.value)}
                            />
                        </label>
                        <label className="py-4">Correo:
                            <input
                                type="text"
                                value={correo}
                                onChange={(e) => setCorreo(e.target.value)}
                            />
                        </label>
                    </div>
                    <br />
                    <button onClick={compraGenerada} className="btn bg-violet-700 hover:bg-pink-300 text-white font-bold py-2 px-4 rounded-full " type="submit">Generar Orden de Compra</button>
                </form>
                :
                ordenDeCompra === "" ? <div className="p-20">
                    <GridLoader
                        color="#724b80"
                        cssOverride={{}}
                        loading
                        margin={5}
                        size={50}
                    />
                </div>
                    :
                    <div className="pl-10 pt-20">
                    <p>Muchas gracias por su compra su numero de orden es : "{ordenDeCompra}"</p>
                    <Link to="/"><button className="btn bg-violet-700 hover:bg-pink-300 text-white font-bold py-2 px-4 rounded-full">Ir Al Inicio</button></Link>
                    </div>
                    }
        </>
    )
}
export default Formulario