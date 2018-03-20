import planetDataWrangler from '../dataWranglers/planetDataWrangler/index';

const fetchPlanetData = (peopleData) => {
  const promises = peopleData.response.map(person => fetch(person.homeworld)
    .then(response => response.json())
    .then(planetData => planetDataWrangler(planetData))
    .then(planetData => Object.assign({}, person, planetData)));
  return Promise.all(promises);
};

export default fetchPlanetData;