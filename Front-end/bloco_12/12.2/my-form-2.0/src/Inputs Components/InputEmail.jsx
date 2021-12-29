import React from 'react';

class InputEmail extends React.Component {
  render() {
    const { value, handleChanges } = this.props;
    return (
      <div className='email'>
        <label htmlFor="email">
          Email:
          <input value={ value } onChange={ handleChanges } type="email" id='email' name='email' maxLength={50} />
        </label>
      </div>
    )
  }
}

export default InputEmail; 