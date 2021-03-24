import PokemonListItem from "./PokemonListItem";
export default function PokemonList({pokemons}){
    return (
        <>
            {pokemons?.map((value,index) => <PokemonListItem value={value} key={index}/>)}
        </>
    );
}