import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

class ListPersons extends React.Component {
  render () {
    const { people: { name, image, infos } } = this.props;
    return (
      <div className='person'>
        <img src={image} alt={name} />
        <h3>Name: {name}</h3>
        <p>Specie: {infos.species}</p>
        <p>Status: {infos.status}</p>
      </div>
    )
  }
}

ListPersons.propTypes = {
  people: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    infos: PropTypes.shape({
      species: PropTypes.string,
      status: PropTypes.string,
    })
  })
}

export default ListPersons;