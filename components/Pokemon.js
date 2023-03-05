import Image from "next/image";
import Link from "next/link";

const Pokemon = ({ pokemon, index }) => {
    const pokeIndex = ('000' + (index + 1)).slice(-3)
    return (
        <Link href={`/pokemon/${pokemon.name}`}>
            <div className="bg-slate-50 rounded p-5 flex flex-col justify-center items-center relative">
                <Image
                    alt={pokemon.name}
                    width={150}
                    height={150}
                    src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIndex}.png`}
                />
            </div>
            <div className="bg-slate-50 rounded p-5">
                <span className="text-slate-500 text-end">#{pokeIndex}
                </span>
                <br />
                <span className="uppercase font-semibold tracking-wider">
                    {pokemon.name}
                </span>
            </div>
        </Link>
    );
};

export default Pokemon;