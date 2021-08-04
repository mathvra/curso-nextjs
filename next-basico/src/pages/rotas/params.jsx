import { useRouter } from 'next/router'
import Link from 'next/link'

//http://localhost:3000/rotas/params?nome=Matheus&id=123

export default function rotas(){
   
    const {nome, id} = useRouter().query
    
    return (
        <div>
            <h1>Rotas Params: {id} e {nome}</h1>
            <Link href="/rotas">
                <button>Voltar</button>
            </Link>
        </div>
    )
}