import listings from "../data/listings";

const rootReducer = (state = listings, action) => {
  switch (action.type) {
    case "GET_MOVIES":
      return state;

    case "GET_SERIES":
      return state;

    default:
      return state;
  }
};

//   const rootReducer = combineReducers({ postReducer, commentReducer });
export default rootReducer;
