const initState = {
  city: null,
  country: null,
  loaded: null,
};
const rootReducer = (state = initState, action) => {
  if (action.type === "CHANGE_CITY") {
    return {
      city: action.city,
      country: action.country,
    };
  }
  return state;
};
export default rootReducer;
