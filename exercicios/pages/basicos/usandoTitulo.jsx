import Titulo from '../../components/Titulo'

export default function usandoTitulo(){
    return(
        <div>
            <Titulo 
                principal="Página de Cadastro"
                secundario="Incluir, alterar e excluir coisas!"
            />

            <Titulo 
                principal="Página de Cadastro 02"
                secundario="Incluir, alterar e excluir coisas 02!"
            />
        </div>
    )
}