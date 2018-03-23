export const fetchPeopleData = () => 
  fetch("https://swapi.co/api/people/?format=json&page=1")
    .then(response => response.json())
    .then(wranglePeopleData);

export const wranglePeopleData = peopleData => {
  const peopleArray = peopleData.results.map(person => ({
    name: person.name,
    species: person.species[0],
    homeworld: person.homeworld
  }));
  return {
    next: peopleData.next || null,
    previous: peopleData.previous || null,
    peopleArray
  };
};