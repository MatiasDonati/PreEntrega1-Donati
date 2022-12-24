import { useEffect, useState } from "react"
import CharCard from "./CharCard"

const CharList = () => {

    const [personajes, setPersonajes] = useState([])

    useEffect(() => {
        getChars()
    }, [])

    // CON FETCH
    // const getChars = () => {
    //     const URL = 'https://rickandmortyapi.com/api/character'
    //     fetch(URL)
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data.results);
    //             setPersonajes(data.results)
    //         })
    // }

    // CON ASYNC AWAIT
    const getChars = async () => {
        const URL = 'https://rickandmortyapi.com/api/character'
        const response = await fetch(URL)
        const data = await response.json()
        setPersonajes(data.results)
    }

    const [verPersonajes, setVerPersonajes] = useState(false)

    useEffect(() => {
        setVerPersonajes(false)
    }, [])

    const verONoVer = () => {
        console.log('verONoVer');
        verPersonajes == false ? setVerPersonajes(true) : setVerPersonajes(false)
        boton == false ? setBoton(true) : setBoton(false)
    }

    const [boton, setBoton] = useState([])

    useEffect(() => {
        setBoton(false)
    }, [])

    return (
        <div className="text-center">
            {boton == false ? <button onClick={verONoVer} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Ver personajes de Rick and Morty!</button> : <button onClick={verONoVer} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Ocultar personajes de Rick and Morty!</button>}
            <div className="flex flex-wrap p-10">
                {verPersonajes ? personajes.map(p => <CharCard key={p.id} {...p} />) : <div></div>}
            </div>
        </div>
    )
}
export default CharList