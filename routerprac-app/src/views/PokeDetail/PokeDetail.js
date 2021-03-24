import {useParams} from "react-router-dom";
import {useEffect,useContext} from "react";
import PokemonContext from "../../context/pokemons/pokemons";
import PokeStats from "./components/PokeStats";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
export default function PokeDetail(){
    const{id} = useParams();
    const {getPokemonDetail,pokemonDetail,isLoading,hasError,errorMessage }= useContext(PokemonContext);
    useEffect(()=> {
    /**
     * cada que se cargue la pantalla o cada que cambie el id 
     * soolicitar el detalle del pokemon
     */
        getPokemonDetail(id).catch(null);        
    },[]);
    if(isLoading){
        return <Loading title="Cargando pokemon..." />
    }
    return (
        <div>
            {hasError ? <ErrorMessage message={errorMessage}/>:(
            <>
                <h3 style={{
                        marginTop:15,
                        marginBottom:15
                    }}>Info General</h3>
                <p>
                    {`Name: ${pokemonDetail?.name}`}
                </p>
                <p>{`Peso: ${pokemonDetail?.weight} kg`}</p>
                <p>{`Altura: ${pokemonDetail?.height} cm`}</p>
                <div>
                    <h3 style={{
                        marginTop:30,
                        marginBottom:15
                    }}>Habilidades</h3>
                    <PokeStats stats={pokemonDetail?.stats ??[]}/>
                </div>
            </>
            )};
        </div>
    );
}