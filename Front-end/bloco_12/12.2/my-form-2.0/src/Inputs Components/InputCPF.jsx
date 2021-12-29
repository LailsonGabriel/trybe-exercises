import React from 'react';

class InputCPF extends React.Component {
  render() {
    const { value, handleChanges } = this.props;
    return (
      <div className='cpf'>
          <label htmlFor="number">
            CPF:
            <input value={ value } onChange={ handleChanges } type="number" id='number' name='cpf' maxLength={11} />
          </label>
        </div>
    );
  }
}

export default InputCPF;