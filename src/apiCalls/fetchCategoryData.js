import categoryDataWrangler from '../dataWranglers/categoryDataWrangler/index';

const fetchCategoryData = (category, pageNumber) => {
  return fetch(
    `https://swapi.co/api/${category}/?format=json&page=${pageNumber}`
  )
    .then(response => response.json())
    .then(categoryData => categoryDataWrangler(categoryData, category));
};

export default fetchCategoryData;