import { combineReducers } from "redux";
import messagesReducer from "./message";

const rootReducer = combineReducers({
  messages: messagesReducer,
});
export default rootReducer;
