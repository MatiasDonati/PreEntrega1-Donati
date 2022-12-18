const Eventos = () => {
    const vocales = ["A", "E", "I", "O", "U"]
    const onKeyDown = (e) => {
        if (vocales.find(vocal => vocal == e.key.toUpperCase())) {
            e.preventDefault()
            console.log("se blokea Vocal" + " " + e.key.toUpperCase())
            // dos maneras distintas
            if(vocales.includes(e.key.toUpperCase())){
                e.preventDefault()
                console.log("se blokea Vocal" + " " + e.key.toUpperCase())
            }
        }
    }
    return (
        <div>
            <h1>Input!</h1>
            <p>No podras ingresar vocales!</p>
            <input className="border-2" type="text" onKeyDown={onKeyDown} ></input>
        </div>
    );
}
export default Eventos