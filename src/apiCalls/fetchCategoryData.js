import categoryDataWrangler from '../scripts/categoryDataWrangler';

const fetchCategoryData = (category, pageNumber) => {
  return fetch(
    `https://swapi.co/api/${category}/?format=json&page=${pageNumber}`
  )
    .then(response => response.json())
    .then(categoryData => categoryDataWrangler(categoryData, category));
};

export default fetchCategoryData;