import { useRouter } from 'next/router'

//http://localhost:3000/rotas/params?nome=Matheus&id=123

export default function rotas(){
   
    const {nome, id} = useRouter().query
    
    return (
        <div>
            <h1>Rotas Params: {id} e {nome}</h1>
        </div>
    )
}