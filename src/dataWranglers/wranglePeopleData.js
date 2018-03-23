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