import categoryDataWrangler from '../dataWranglers/categoryDataWrangler/index';

const fetchCategoryData = (category) => {
  return fetch(
    `https://swapi.co/api/${category}/?format=json&page=1`
  )
    .then(response => response.json())
    .then(categoryData => categoryDataWrangler(categoryData, category));
};

export default fetchCategoryData;