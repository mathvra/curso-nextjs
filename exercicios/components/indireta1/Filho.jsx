export default function Filho (props){
    // "Passei no ENEM!"
    console.log(props)
    return(
        <div>
            <h1>Filho</h1>
            <button onClick={() => props.funcao("Passei no ENEM!", "FINALMENTE", "GÉSIO")}> Falar com o Pai </button>
            {/* <button onClick={ev => props.funcao(ev)}> Falar com o Pai </button> */}
        </div>
    )
}