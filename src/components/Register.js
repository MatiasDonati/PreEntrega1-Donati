import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom";

const Register = () => {

    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const { signup } = useAuth()
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
                await signup(user.email, user.password)
                navigate('/')
            } catch (Error) {
                console.log(Error);
            }
        }
    }


    return (
        <div className="pt-20 pl-10 justify-center items-center h-screen mx-auto container w-full bg-slate-800">
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" placeholder="  ...@....com"
                    onChange={handleChange}
                />

                <label htmlFor="password">Contraseña:</label>
                <input type="password" name="password" id="password" placeholder="  ******"
                    onChange={handleChange}
                />

                <button>Registrase</button>

            </form>

            {error && <p>{error}</p>}

        </div>
    )
}
export default Register