import { combineReducers } from "redux";
import themeReducer from "./reducers/themeReducer";

const rootReducer = combineReducers({
  theme: themeReducer,
});

export default rootReducer;
