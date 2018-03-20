import planetDataWrangler from '../dataWranglers/planetDataWrangler/index';

const fetchPlanetData = (peopleData) => {
  const promises = peopleData.map(person => fetch(person.homeworld)
    .then(response => response.json())
    .then(planetDataWrangler)
    .then(wrangledData => ({...person, ...wrangledData}))
  );
  return Promise.all(promises);
};

export default fetchPlanetData;