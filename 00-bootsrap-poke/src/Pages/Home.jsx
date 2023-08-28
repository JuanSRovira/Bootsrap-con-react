import {useState, useEffect} from 'react'

const Home = () => {
const [pokemons, setPokemons] = useState([]) //Pokemon's List

//API's call



useEffect (() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=649&offset=0')
    .then(res => res.json())
    .then(data => setPokemons(data.results)) //Pokemon's fix so the link will give me only the .results
    .catch(error => console.error(error))
}, 
[])

return (
<>
    <h1>Home</h1>
    <div className='container'>
        <h1>Home</h1>
        <div className='row'>
        {
            pokemons.map(pokemon => (

            <div className='col-2' key={pokemon.name}>
                <div className='card'>
                <div className='card-body'>
                    <img
                className='card-img-top'
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated//${pokemon.url.split('/')[6]}.gif`}
    
                    alt={pokemon.name}
                    />
                    <h5 className='card-title'>{pokemon.name}</h5>
            </div>
                </div>
            </div>

            )

            )

        }

        </div>
    </div>
    </>
  )
}

export default Home