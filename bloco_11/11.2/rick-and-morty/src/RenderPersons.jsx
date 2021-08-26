import React from 'react';
import ListPersons from './ListPersons';


class RenderPersons extends React.Component {
  render () {
    const { people } = this.props;
    return (
      <div className='Pai'>
        {people.map((people) => (
          <ListPersons
          key={ people.id}
          people={people}
          />
        ))}
      </div>
    )
  }
}

export default RenderPersons;