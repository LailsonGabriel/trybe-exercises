import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PokeDex from './PokeDex';
import reportWebVitals from './reportWebVitals';
import pokemons from './data'

ReactDOM.render(
  <React.StrictMode>
    <PokeDex pokemons={pokemons}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
