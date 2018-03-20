import planetDataWrangler from '../dataWranglers/planetDataWrangler/index';

const fetchPlanetData = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then(planetData => planetDataWrangler(planetData));
};

export default fetchPlanetData;