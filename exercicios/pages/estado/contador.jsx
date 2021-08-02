import { useState } from "react"

export default function contador(){

    const estilo = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#222",
        color: "#fff",
        height: "100vh"
    }

    const [x, setX] = useState(0)

    function contadorMais(){
        setX(x + 1)
    }

    function contadorMenos(){
        setX(x - 1)
    }

    return(
        <div style={estilo}>
            <h1>Contador</h1>
            <div>Valor: {x}</div>
            <button onClick={contadorMenos}>-</button>
            <button onClick={contadorMais}>+</button>
        </div>
    )
}