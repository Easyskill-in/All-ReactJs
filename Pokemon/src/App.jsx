import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [pokemon, setPokemon] = useState({})
  const [Name, setName] = useState("")
  useEffect(() => {
    async function name() {
      try {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon/Charmander")
        console.log(res.data)


        setPokemon(res.data)
      } catch (error) {
        console.log("Errororor : ", error)
      }
    }

    name()
  }, [])

  useEffect(() => {


    async function getPokemon() {
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${Name.toLowerCase()}`)
        console.log("Get Pokemon : ", res.data)


        setPokemon(res.data)
      } catch (error) {
        console.log("Errororor : ", error)
      }
    }
    getPokemon()
  }, [Name])
  return (
    <>
      <form >
        <select name="pokemon" id="pokemon" onChange={(e) =>
          setName(e.target.value)
        }>
          <option value="Charmander">Charmander</option>
          <option value="Bulbasaur">Bulbasaur</option>
          <option value="Squirtle">Squirtle</option>
          <option value="Pikachu">Pikachu</option>
          <option value="Mewtwo">Mewtwo</option>
          <option value="charizard ">Charizard </option>
        </select>
        <br />
        <br />

      </form >
      <div>
        <h1>{pokemon.name}</h1>
        <hr />
        <div className="img-grid">

          <img src={
            pokemon.sprites?.front_default
          } alt="" />
          <img src={
            pokemon.sprites?.front_shiny
          } alt="" />
          <img src={
            pokemon.sprites?.other?.dream_world.front_default
          } alt="" />
          <img src={
            pokemon.sprites?.other["official-artwork"].front_default
          } alt="" />
        </div>
      </div>
    </>
  )
}

export default App
