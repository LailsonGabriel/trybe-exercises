function dogPic () {
  return fetch('https://dog.ceo/api/breeds/image/random')
  .then((response) => response.json())
  .then((data) => response.ok ? Promise.resolve(data) : Promise.reject(data))
};

module.exports = { dogPic };