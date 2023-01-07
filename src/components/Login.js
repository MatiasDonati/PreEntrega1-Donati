import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const { login  } = useAuth()
    const navigate = useNavigate()
    const [error, setError] = useState()

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (user.password.length < 6) {
            setError('La contraseña debe tener al menos 6 caracteres')
        } else {
            try {
                await login(user.email, user.password)
                navigate('/edit-items-admin')
                // Aca tiene que llevar a la edicion de productos !
            } catch (error) {
              console.log(error);
            }
        }
    }


    return (
        <div className="pt-20 pl-10 justify-center items-center h-screen mx-auto container w-full bg-slate-800">
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" placeholder="  ...@....com"
                    onChange={handleChange}
                />

                <label htmlFor="password">Contraseña:</label>
                <input type="password" name="password" id="password" placeholder="  ******"
                    onChange={handleChange}
                />

                <button>Login</button>

            </form>

            {error && <p>{error}</p>}

        </div>
    )
}
export default Login