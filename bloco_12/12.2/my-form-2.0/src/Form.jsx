import React from 'react';
import InputAdress from './Inputs Components/InputAdress';
import InputCity from './Inputs Components/InputCity';
import InputCPF from './Inputs Components/InputCPF';
import InputEmail from './Inputs Components/InputEmail';
import InputName from './Inputs Components/InputName';
import State from './Inputs Components/State';
import './Styles.css'

class Form extends React.Component {
  constructor () {
    super()

    this.state = {
      name: '',
      email: '',
      cpf: 0,
      adress: '',
      city: '',
      state: '',
      type: '',
    }
    this.handleChanges = this.handleChanges.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  handleEvent(name,value) {
    this.setState({
      [name]: value
    })
  }

  specialCharacters(value) {
  const text = value.replace(/[!@#$%&*()]/, '');
    return text
  }

  onBlur() {
    if(this.state.city.match(/[0-9]/)) this.setState({
      city: '',
    })
    
  }

  handleChanges({target}) {
    let{ name, value } = target;
    if(name === 'name') value = value.toUpperCase();
    if(name === 'adress') value = this.specialCharacters(value);
    this.handleEvent(name, value)
  }
 
  render() {
    return (
      <form className='form'>
      <fieldset>
        <InputName value={this.state.name} handleChanges={this.handleChanges} handleEvent={this.handleEvent}/>
        <InputEmail value={this.state.email} handleChanges={this.handleChanges}/>
        <InputCPF value={this.state.cpf} handleChanges={this.handleChanges}/>
        <InputAdress value={this.state.adress} handleChanges={this.handleChanges} />
        <InputCity value={this.state.city} handleChanges={this.handleChanges} onBlur={this.onBlur} />
        <div className='state'>
          <State value={this.state.state} handleChanges={this.handleChanges} />
        </div>
        <div className='type' value={this.state.type} onChange={this.handleChanges}>
            <input type="radio" value='Apartment' name='type' />Apartment
            <input type="radio" value='Home' name='type' />Home
        </div>
      </fieldset>
      </form>
    )
  }
}

export default Form;