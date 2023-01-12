import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../index";


const authContext = createContext()

const useAuth = () => {
    const context = useContext(authContext)
    if (!context) throw new Error('No se encuentra el auth provider!')
    return context
}

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const signup = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)

    }

    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        signOut(auth)
    }

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
    }, [])

    return (
        <authContext.Provider value={{ signup, login, user, logout }}>
            {children}
        </authContext.Provider>
    )
}

export { AuthProvider, authContext, useAuth }