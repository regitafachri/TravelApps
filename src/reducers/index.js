import { combineReducers } from "redux";
import { PENDING, FULFILLED, REJECTED } from "redux-promise-middleware";
import { GET_DATA } from "../action";

const dataBanners = (
  state = {
    isFetching: false,
    item: []
  },
  action
) => {
  switch (action.type) {
    case `${GET_DATA}_PENDING`:
      return {
        ...state,
        isFetching: true
      };
    case `${GET_DATA}_FULLFILLED`:
      return {
        isFetching: false,
        item: action.payload
      };
      case `${GET_DATA}_REJECTED`:
      return{
          isFetching: false
      }

      default: return state
  }
};
const rootReducer = combineReducers({
    dataBanners
});

export default rootReducer;
