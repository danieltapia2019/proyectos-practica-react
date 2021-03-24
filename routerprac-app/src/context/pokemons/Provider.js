import PokemonContext from "./pokemons";
import apiCall from "../../api/api";
import { useState } from "react";
export default function PokemonProvider({children}){
    const [pokemons,setPokemons] = useState([]);
    const [pokemonDetail,setPokemonDetail] = useState({});
    const [isLoading,setIsloading] = useState(false);
    const [hasError,setHasError] = useState(false);
    const [errorMessage,setErrorMessage] = useState("");
    
    const getPokemons = async() => {
        try {
            setIsloading(true);
            setErrorMessage("");
            setHasError(false);
            
            const pokemonsResult = await apiCall({url: "https://pokeapi.co/api/v2/pokemon?limit=100"});
            setPokemons(pokemonsResult.results);
        } catch (error) {
            setPokemons([]);
            setErrorMessage("Ups, algo ha pasado!. Verifica tu conexión");
            setHasError(true);
        } finally{
            setIsloading(false);
        }
    }

    const getPokemonDetail = async(id)=>{
        if(!id) Promise.reject("Id es requerido");
        
        try {
            setIsloading(true);
            setErrorMessage("");
            setHasError(false);
            
            const pokemonDetail = await apiCall({url: `https://pokeapi.co/api/v2/pokemon/${id}`});
            setPokemonDetail(pokemonDetail);
        } catch (error) {
            setPokemonDetail({});
            setErrorMessage("Ups, algo ha pasado!. Verifica tu conexión");
            setHasError(true);
        } finally{
            setIsloading(false);
        }
    }
    return(
        <PokemonContext.Provider value={{
            getPokemons, 
            pokemons,
            getPokemonDetail,
            pokemonDetail,
            errorMessage,
            isLoading,
            hasError}}>
            {children}
        </PokemonContext.Provider>
    );
}