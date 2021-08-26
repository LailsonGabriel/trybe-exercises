import React from 'react';
import states from '../states'

class State extends React.Component {
  render() {
    const { value, handleChanges } = this.props;
    return (
      <select name="state" id="state" value={value} onChange={handleChanges}>
        {states.map((state) => (
          <option key={state} value={state}>{state}</option>
        ))}
      </select>
    )
  }
}

export default State;