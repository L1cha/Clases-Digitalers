import { Link } from "react-router-dom";

const Navegacion = ({rutas}) => {
    return (<nav>
        <ul className="nav alert alert-info p-0">
            {
                rutas.map( (ruta) => (
                    <li className="nav-item" key={ruta.url}>
                        <Link className="nav-link" to={ruta.url}>{ruta.nombre}</Link>
                    </li>
                ))
            }
        </ul>
    </nav>);
}
 
export default Navegacion;