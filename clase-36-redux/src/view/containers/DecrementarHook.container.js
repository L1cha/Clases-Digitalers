import Boton from "../componets/Boton";
import { useDispatch } from "react-redux";
import {ACT_DECREMENTAR}  from "../../actions/action-types";

const Decrementar = () => {
    const dispatch = useDispatch();

    return ( 
        <Boton texto="-"
        onClick={() =>{
            //va a hacer llegar el reducer
            dispatch({
                type: ACT_DECREMENTAR
            })
        }} />
     );
}
 
export default Decrementar;