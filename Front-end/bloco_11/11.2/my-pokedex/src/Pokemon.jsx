import React from 'react';
import PropTypes from 'prop-types';
import './pokemon.css'

class PokemonsCard extends React.Component {
  render () {
    const { name, type, averageWeight, image } = this.props;
    return ( 
        <div className='pokemon'>
          <img src={image} alt={name} />
          <h4>Name: { name }</h4>
          <p>Type: {type}</p>
          <p>Average Weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        </div>
     );
  }
}

PokemonsCard.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
};
 
export default PokemonsCard;