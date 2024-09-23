import { applyMiddleware, combineReducers, createStore } from "redux";
import restaurantReducer from "./reducers/restaurantReducer";
import productReducer from "./reducers/productReducer";
import { thunk } from "redux-thunk";
import basketReducer from "./reducers/basketReducer";

const rootReducer = combineReducers({
  restaurants: restaurantReducer,
  products: productReducer,
  card: basketReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
