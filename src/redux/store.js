import { createStore,applyMiddleware, combineReducers} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/rootReducer";
const middleware=[thunk];

const store=createStore(rootReducer,applyMiddleware(...middleware));
export default store;
