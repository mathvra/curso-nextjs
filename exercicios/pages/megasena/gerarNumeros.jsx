import { useState } from 'react';
import style from '../../styles/GerarNumeros.module.css'
import Numero from '../../components/Numero'

export default function gerarNumeros(){
    const [numbers, setNumbers] = useState([])
    const [quantidade, setQuantidade] = useState(6)
    
    function randonNumber(quantidade) {
        console.log(quantidade)
        let numeros = []
        for(let i = 1; i<=quantidade; i++){
            numeros.push(parseInt(Math.random() * (60 - 1) + 1));
        }
        setNumbers(numeros)
    }

    return(
        <div className={style.principal}>
            <div className={style.result}>
                {numbers.map((number, id)=>(
                    <Numero numero={number} key={id}/>
                ))}
            </div>
            <input type="text" placeholder="Quantidade de Numeros" onChange={(e)=>setQuantidade(e.target.value)} />
            <button onClick={() => randonNumber(quantidade)}>Gerar numero</button>
        </div>
    )
}