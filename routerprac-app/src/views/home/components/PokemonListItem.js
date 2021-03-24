import {Link} from "react-router-dom";
export default function PokemonListItem({value}){
    const getId = () =>value.url.split("/")[6];
    
    return(
        <div>
            <p>{value.name}</p>
            <button>
                <Link to={`/pokemon/${getId()}`}>Ver Detalle</Link>
            </button>
        </div>
    )
}