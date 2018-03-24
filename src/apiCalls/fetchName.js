import { wrangleResidentData } from '../dataWranglers/wrangleResidentData';

export const fetchName = resident =>
  fetch(resident)
    .then(response => response.json())
    .then(wrangleResidentData);