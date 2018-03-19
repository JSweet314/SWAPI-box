import scrollingTextDataWrangler from 
  '../dataWranglers/scrollingTextWrangler/index';

const fetchScrollingText = () => {
  const randomFilmNumber = Math.floor(Math.random() * 7) + 1;
  return fetch(`https://swapi.co/api/films/${randomFilmNumber}/?format=json`)
    .then(response => response.json())
    .then(filmData => scrollingTextDataWrangler(filmData));
};

export default fetchScrollingText;