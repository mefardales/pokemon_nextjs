import Layout from "../components/Layout";
import { useState } from "react";
import Pokemon from "../components/Pokemon";

export default function Home({ initialPokemon }) {
  const [pokemon, setPokemon] = useState(initialPokemon)
  const [offset, setOffet] = useState(0)

  const fetchPokemon = async (url, next) => {
    const response = await fetch(url)
    const nextPokemon = await response.json()

    setOffet(next ? offset + 20 : offset - 20)
    setPokemon(nextPokemon)
  }

  return (
    <Layout title={"Pokemon Simple App"}>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {pokemon.results.map((monster, index) => (
          <Pokemon key={index} pokemon={monster} index={index + offset} />
        ))}
      </div>

      <div className="mt-10 flex justify-center gap-5">
        <button disabled={!pokemon.next} className="disabled:bg-gray-500 px-3 rounded-lg bg-blue-500 py-1" onClick={() => fetchPokemon(pokemon.next, true)}>Load more Pokémon</button>

      </div>
      <>
        <br />
        &gt;
      </>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon")
  const initialPokemon = await response.json()

  return {
    props: {
      initialPokemon
    }
  }
}