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
        setOrden(true)
        makeOrder(name, apellido, celular, tarjeta, correo)
        clearCart()
        console.log(name, apellido, celular, tarjeta, correo);
    }

    return (
        <>
            {orden === false ?
                <form onSubmit={handleSubmit} className="pt-20 pl-10 justify-center items-center h-screen mx-auto container w-full">
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
                    <button onClick={handleSubmit} className="btn bg-violet-700 hover:bg-pink-300 text-white font-bold py-2 px-4 rounded-full " type="submit">Generar Orden de Compra</button>
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

                        <h1>Corroborá tus datos personales:</h1>
                        <h2>Nombre: {name}</h2>
                        <h2>Apellido: {apellido}</h2>
                        <h2>Celular: {celular}</h2>
                        <h2>Numero de Tarjeta: {tarjeta}</h2>
                        <h2>Correo: {correo}</h2>

                        <button className="btn bg-violet-700 hover:bg-pink-300 text-white font-bold py-2 px-4 rounded-full">Ok</button>
                        <button className="btn bg-violet-700 hover:bg-pink-300 text-white font-bold py-2 px-4 rounded-full">Editar</button>

                        <p>Muchas gracias {name} por su compra su numero de orden es : "{ordenDeCompra}"</p>
                        <br />
                        <Link to="/"><button className="btn bg-violet-700 hover:bg-pink-300 text-white font-bold py-2 px-4 rounded-full">Ir Al Inicio</button></Link>
                    </div>
            }
        </>
    )
}
export default Formulario