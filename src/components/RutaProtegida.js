import { useAuth } from "../context/AuthContext";
import { Navigate, navigate } from 'react-router-dom'

export function RutaProtejida({ children }) {
    const { user } = useAuth()

    if (!user) {
        return <Navigate to="/" />
    }

    return <>{children}</>
}