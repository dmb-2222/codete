import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import {
  paragraphReducerFilter,
  publicationsReducer,
  paragraphReducer,
} from "./reducer";

const rootReducer = combineReducers({
  paragraphs: paragraphReducerFilter,
  publications: publicationsReducer,
  paragraph: paragraphReducer,
});
const store = createStore(rootReducer, devToolsEnhancer());

export default store;
