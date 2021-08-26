const fetch = require('node-fetch');

const API_URL = 'https://randomuser.me/api/';

const fetchJoke = () => {
  return fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => console.log(data.results[0]));
};
fetchJoke()

module.exports = { fetchJoke }