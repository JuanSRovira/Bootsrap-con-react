import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
const [pokemons, setPokemons] = useState([]) //Pokemon's List
const [search, setSearch] = useState('')

//API's call



useEffect (() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=649&offset=0')
    .then(res => res.json())
    .then(data => setPokemons(data.results)) //Pokemon's fix so the link will give me only the .results
    .catch(error => console.error(error))
}, 
[])


const handleSearch = (event) => {
    setSearch (event.target.value)
} 

const filterPokemons = pokemons.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(search.toLocaleLowerCase())
})


return (
<>

    <div className='container'>
        
        <form className="form-inline my-2 w-100">
            <input type="text" className='form-control' placeholder='Search Pokemon' value={search} onChange={handleSearch}/>

            
        </form>
        <div className='row'>
        {
            filterPokemons.map(pokemon => (

            <div className='col-2'  key={pokemon.name}>
                <div className='card'>
                <div className='card-body'>
                    <img
                className='card-img-top'
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated//${pokemon.url.split('/')[6]}.gif`}
                alt={pokemon.name}
                    />
                    <Link 
                    className='card-title'
                    to={`/pokemon/${pokemon.url.split('/')[6]}`}
                    >


                    {pokemon.name}
                    </Link>
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