import React from 'react';
import Layout from "../../components/Layout";
import Image from "next/image";

const Pokemon = ({ pokemon }) => {
    const pokeIndex = ('000' + (pokemon.id)).slice(-3)
    const pokeName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    console.log(pokemon)

    const renderTypes = () => (
        pokemon.types.map(type => (
            <li key={type.slot} className="px-3 py-2 bg-red-300 rounded">
                {type.type.name}
            </li>
        ))
    )

    const renderPok = () => (
        <div className='grid gap-4 grid-cols-2 grid-rows-2 pt-2'>
            <li className="py-1 bg-blue-300 rounded">
                Height: {pokemon.height ? pokemon.height : "-" } 
            </li>
            <li className="py-1 bg-blue-300 rounded">
                Category: {pokemon.category ? pokemon.category : "-" }
            </li>
            <li className="py-1 bg-blue-300 rounded">
                Weight: {pokemon.weight ? pokemon.weight : "-" } 
            </li>
            <li className="py-1 bg-blue-300 rounded">
                Abilities: {pokemon.ability ? "" : "-" } 
            </li>
        </div>
        )

    const renderStats = () => (
        pokemon.stats.map((stat, index) => (
            <div key={index} className="bg-slate-500 my-2 rounded p-1">
                <div className="bg-blue-500 rounded px-2" style={{ width: `${stat.base_stat}%` }}>
                    {stat.stat.name}: {stat.base_stat}
                </div>
            </div>
        ))
    )

    return (
        <Layout title={pokeName}>
            <div className='grid gap-4 grid-cols-2'>
                <div>
                    <Image className='bg-gray-300 rounded'
                        alt={pokemon.name}
                        width={400}
                        height={400}
                        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIndex}.png`}
                    />

                </div>
                <div className=' bg-blue-500 rounded grid gap-4 grid-cols-1 grid-rows-2 p-4'>
                    <div> 
                        <ul>
                            {renderPok()}
                        </ul>
                    </div>
                    <div className='bg-gray-50 p-3'>
                        <span> Type </span>
                        <ul className="flex gap-5 justify-center">
                            {renderTypes()}
                        </ul>
                    </div>
                </div>

                <div className='bg-gray-300 pt-6 pr-4 pb-4 pl-4 rounded'>
                    Stats
                    {renderStats()}
                </div>
            </div>
        </Layout>
    );
};

export default Pokemon;

export async function getServerSideProps(context) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${context.query.name}`)
    const pokemon = await response.json()

    return {
        props: {
            pokemon
        }
    }
}