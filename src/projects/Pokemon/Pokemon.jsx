import { useEffect, useState } from "react";
import "./Pokemon.css";
import { PockemonCards } from "./PockemonCards";

export const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);

  const POKAPI = "https://pokeapi.co/api/v2/pokemon";

  const fetchPOKApi = () => {
    fetch(POKAPI)
      .then((res) => res.json())//convert to json
      .then((data) => {
        // Fetch details for each Pokémon
        const promises = data.results.map((pokemon) =>
          fetch(pokemon.url).then((res) => res.json())//url data
        );
        console.log("data",data);
        console.log("promises",promises);

        Promise.all(promises)//Promise.all(promises) waits until all individual fetches are done. When complete, allData holds full info for each Pokémon.
          .then((allData) => setPokemon(allData))//setPokemon(allData) updates your component's state with it.
          .catch((err) => console.log("Error fetching individual Pokémon:", err));
      })
      .catch((error) => console.log("Error fetching list:", error));
  };

  useEffect(() => {
    fetchPOKApi();
  }, []);
console.log(pokemon);

  return (
      <div className="container">
       
      {/* {pokemon.map((apipok) => (
        <div key={apipok.id} className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
                className="w-full"
                src={apipok.sprites.front_default}
                alt={apipok.name}
                />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{apipok.name}</div>
                <p className="text-gray-700 text-base">
                Type: {apipok.types.map((t) => t.type.name).join(", ")}
                </p>
            </div>
        </div>
      ))} */}
      {pokemon.map((apipok) => {
          return <PockemonCards key={apipok.id} pokemonData={apipok}/>

      })}

    </div>
  );
};
