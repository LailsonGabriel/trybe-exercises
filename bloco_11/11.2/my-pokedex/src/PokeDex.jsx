import React from 'react';
import PokemonsCard from './Pokemon';
import pokemons from './data';

class PokeDex extends React.Component {
  render () {
    //const { pokemons } = this.props;
    return (
      <div className='PokeDex'>
        {pokemons.map(({id, name, type, averageWeight, image}) => (
          <PokemonsCard 
          key={id}
          name={name}
          type={type}
          averageWeight={averageWeight}
          image={image}
          />
        ))}
      </div>
    )
  }
}

export default PokeDex;