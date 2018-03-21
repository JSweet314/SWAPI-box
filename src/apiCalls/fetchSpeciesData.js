const fetchSpeciesData = peopleData =>
  Promise.all(peopleData.map(person => fetch(person.species)
    .then(response => response.json())
    .then(speciesData => ({ species: speciesData.name }))
    .then(speciesData => ({...person, ...speciesData}))
  ));

export default fetchSpeciesData;