import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      api: false,
      picture: '',
      name: '',
      email: '',
      age: 0,
    }
  }

  async componentDidMount() {
    const api = 'https://api.randomuser.me/';
    const person = await fetch(api).then((response) => response.json())
    .then(({ results }) => results[0])
    this.setState({
      api: true,
      picture: person.picture.large,
      name: person.name.first,
      email: person.email,
      age: person.dob.age
    })
  }

  person() {
    const { picture, name, email, age } = this.state;
    return <div>
      <img src={picture} alt={name}></img>
      <p>Name: {name}</p>
      <p>email: {email}</p>
      <p>Age: {age}</p>
    </div>
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('oi')
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextState.age > 50) return false;
    return true;
  }

  render() {
  const loading = <span>loading...</span>
  const { api } = this.state;
  return (
    <div>
      <div>{api ? this.person() : loading}</div>
    </div>
  );
  }
}

export default App;
