const fetchSpecies = person =>
  fetch(person.species)
    .then(response => response.json())
    .then(speciesData => ({ species: speciesData.name }))
    .then(speciesData => ({ ...person, ...speciesData }));

const fetchAllSpeciesData = peopleArray =>
  Promise.all(peopleArray.map(fetchSpecies));

export default fetchAllSpeciesData;