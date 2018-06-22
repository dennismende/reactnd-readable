export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';

export const fetchCategories = () => {
  return (dispatch, getState, api) => {
    api.getAllCategories()
      .then((categories) => dispatch(fetchCategoriesSuccess(categories)));
  }
}

const fetchCategoriesSuccess = (categories) => {
  return {
    type: FETCH_CATEGORIES,
    categories,
  };
}
