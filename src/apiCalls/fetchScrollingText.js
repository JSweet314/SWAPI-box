import scrollingTextDataWrangler from 
  '../dataWranglers/scrollingTextWrangler/index';

const fetchScrollingText = (randomNumber) => {
  return fetch(`https://swapi.co/api/films/${randomNumber}/?format=json`)
    .then(response => response.json())
    .then(filmData => scrollingTextDataWrangler(filmData));
};

export default fetchScrollingText;