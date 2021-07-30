import Filho from "../../components/indireta1/Filho";
import Pai from "../../components/indireta1/Pai";

export default function indireta1 (){
    return(
        <div>
            <Pai>
                <Filho />
            </Pai>
        </div>
    )
}