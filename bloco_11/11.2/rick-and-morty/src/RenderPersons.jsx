import React from 'react';
import people from './data';
import ListPersons from './ListPersons';


class RenderPersons extends React.Component {
  render () {
    return (
      <div className='Pai'>
        {people.map(({id, name, image, infos}) => (
          <ListPersons
          key={id}
          name={name}
          image={image}
          infos={infos}
          />
        ))}
      </div>
    )
  }
}

export default RenderPersons;