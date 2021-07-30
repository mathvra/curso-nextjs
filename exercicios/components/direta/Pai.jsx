import Filho from "./Filho";

export default function Pai(props){
    return (
        <div>
            <Filho nome="Gésio" familia={props.familia} />
            <Filho nome="Matheus" familia={props.familia} />
            <Filho {...props} />
        </div>
    )
}