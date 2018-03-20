import speciesDataWrangler from '../dataWranglers/speciesDataWrangler/index';

const fetchSpeciesData = (peopleData) => {
  const promises = peopleData.map(person => fetch(person.species)
    .then(response => response.json())
    .then(speciesData => speciesDataWrangler(speciesData))
    .then(speciesData => Object.assign({}, person, speciesData))
  );

  return Promise.all(promises);
};

export default fetchSpeciesData;