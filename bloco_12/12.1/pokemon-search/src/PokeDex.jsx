import React from 'react';
import PokemonsCard from './Pokemon';
import './search.css'

class PokeDex extends React.Component {
  constructor () {
    super()
    this.state = {
      searchValue: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({searchValue: e.target.value})
    console.log(e.target.value)
  }

  render () {
    const { pokemons } = this.props;
    const { searchValue } = this.state;
    return (
      <div>
        <div className='search'>
          <h1>PokeDex</h1>
          <input type="text" placeholder={'Busca'} onChange={this.handleChange}/>
        </div>
        <div className='PokeDex'>
          {pokemons
            .filter((poke) => poke.name.toLowerCase()
            .includes(this.state.searchValue.toLocaleLowerCase()) )
            .map((pokemon) => (
            <PokemonsCard 
            key={pokemon.id}
            pokemon={pokemon}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default PokeDex;