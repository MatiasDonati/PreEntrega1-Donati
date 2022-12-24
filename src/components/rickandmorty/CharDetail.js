import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

const CharDetail = () => {

  const [char, setChar] = useState()
  const { charId } = useParams()

  // const darkMode = useContext(CartContext)

  useEffect(() => {
    getCharDetail()
  }, [charId])

  const getCharDetail = async () => {
    const URL = 'https://rickandmortyapi.com/api/character/'
    const response = await fetch(URL + charId)
    const data = await response.json()
    setChar(data)
  }



  return (
    <>
      <div>CharDetail {charId}</div>
      <div> {JSON.stringify(char)}</div>
      {/* <p className="text-xl">DarkMode {darkMode? ' on' : ' off'}</p> */}
    </>
  )
}
export default CharDetail