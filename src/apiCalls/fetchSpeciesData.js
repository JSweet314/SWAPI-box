import speciesDataWrangler from '../dataWranglers/speciesDataWrangler/index';

const fetchSpeciesData = (peopleData) => {
  const promises = peopleData.map(person => fetch(person.species)
    .then(response => response.json())
    .then(speciesDataWrangler)
    .then(wrangledData => ({...person, ...wrangledData}))
  );
  return Promise.all(promises);
};

export default fetchSpeciesData;