import React from 'react';

class InputCity extends React.Component {
  render() {
    const { value, handleChanges, onBlur } = this.props
    return (
      <div className='city'>
        <label htmlFor="city">
          City:
          <input value={ value } onChange={ handleChanges } type="text" id='city' name='city' maxLength={28} onBlur={onBlur}/>
        </label>
      </div>
    )
  }
}

export default InputCity;