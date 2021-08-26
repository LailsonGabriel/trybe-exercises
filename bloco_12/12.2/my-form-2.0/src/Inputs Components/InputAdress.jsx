import React from 'react';

class InputAdress extends React.Component {
  render() {
    const { value, handleChanges } = this.props;
    return (
      <div className='adress'>
        <label htmlFor="adress">
          Adress:
          <input value={ value } onChange={ handleChanges } type="text" id='adress' name='adress' maxLength={200} />
        </label>
      </div>
    )
  }
}

export default InputAdress;