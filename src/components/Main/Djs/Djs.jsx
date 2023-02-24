import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { InfinitySpin } from 'react-loader-spinner'
import useFetch from '../../../hooks/useFetch';

function Djs() {
  // const [pokemons, setPokemons] = useState([]);


  const { loading, result } = useFetch('https://pokeapi.co/api/v2/pokemon');
  console.log(result.results);



  // useEffect(() => {
  //   const getPokemons = async () => {
  //     const resp = await fetch('https://pokeapi.co/api/v2/pokemon');
  //     const data = await resp.json();
  //     setPokemons(data.results);
  //   }
  //   getPokemons();
  // }, []);// [] --> componentDidMount en clases

  return (
    <section>
      <h1>DJs residentes</h1>



      {loading ? <>

        <InfinitySpin
          width='200'
          color="#000"
        />
        <p>carganding....</p>

      </> : result.results.map((pokemon) => <h3 key={uuidv4()}>{pokemon.name}</h3>)}

    </section>

  );
}

export default Djs