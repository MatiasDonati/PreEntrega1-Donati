import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const MensajeAdmin = () => {

    const { user } = useAuth()

    return (
        <>
            {user &&
                <>
                    <div className='text-center pt-20'>Bienvenido {user.email}</div>
                    <div className='text-center pt-5'>Para editar da Click en la direccion del Email o <Link to="/edit-items-admin" className="btn" >Aqui</Link></div>
                </>
            }
        </>
    )
}
export default MensajeAdmin