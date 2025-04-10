export const PockemonCards = ({ pokemonData }) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src={pokemonData.sprites.front_default}
          alt={pokemonData.name}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{pokemonData.name}</div>
          <p className="text-gray-700 text-base">
            Type: {pokemonData.types.map((t) => t.type.name).join(", ")}
          </p>
        </div>
      </div>
    );
  };
  