import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

class ListPersons extends React.Component {
  render () {
    const { name, image, infos } = this.props;
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
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  infos: PropTypes.shape({
    species: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
  })
}

export default ListPersons;