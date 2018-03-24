import { fetchName } from './fetchName';

export const assignResidentsToPlanets = planet =>
  Promise.all(planet.residents.map(fetchName))
    .then(residents => ({ ...planet, residents }));