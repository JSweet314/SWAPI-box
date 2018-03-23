export const fetchSpecies = person =>
  fetch(person.species)
    .then(response => response.json())
    .then(speciesData => ({ species: speciesData.name }))
    .then(speciesData => ({ ...person, ...speciesData }));

export const fetchAllSpeciesData = peopleData =>
  Promise.all(peopleData.peopleArray.map(fetchSpecies))
    .then(peopleArray => ({...peopleData, peopleArray}));