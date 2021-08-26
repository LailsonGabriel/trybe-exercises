import React from 'react';

class InputName extends React.Component {
  render() {
    const { value, handleChanges} = this.props;
    return (
      <div className='name'>
          <label htmlFor="name">
            Name:
            <input value={ value } onChange={ handleChanges } type="name" id='name' name='name' maxLength={40} />
          </label>
        </div>
    )
  }
}

export default InputName;