function gerarLista(quantidade){
    let listas = []

    for(let i = 1; i <= quantidade; i++){
        listas.push(i)
    }

    return listas
}

export default function lista (){
    return (
        <div>
            <div>
                {gerarLista(20).map((conteudo, id)=>(
                    <span key={id}>{conteudo}, </span>
                ))}
            </div>

            <div>
                {gerarLista(5).map((conteudo, id)=>(
                    <span key={id}>{conteudo}, </span>
                ))}
            </div>            
        </div>
    )
}