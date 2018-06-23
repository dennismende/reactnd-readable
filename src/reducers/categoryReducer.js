import { FETCH_CATEGORIES } from '../actions/categoryActions';

const initialState = {
  categories: [],
};

const categoryReducer = (state = initialState, action) => {

  switch (action.type) {

    case FETCH_CATEGORIES :
      const { categories } = action;

      return {
        ...state,
        categories
      }

    default :
      return state
  }

}

export default categoryReducer;
