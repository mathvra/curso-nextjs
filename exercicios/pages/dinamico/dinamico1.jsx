export function getServerSideProps(){
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Dinamico1 (props){
    return(
        <div>
            <h1>Dinânmico #01</h1>
            <h1>{props.numero}</h1>
        </div>
    )
}