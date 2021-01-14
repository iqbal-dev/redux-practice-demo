import { applyMiddleware, createStore } from "redux";
import { userReducer } from "./user/userReducer";
import compositeWithDevTools from 'redux-devtools-extension'
import logger from "redux-logger";
import thunk from "redux-thunk";



export const store = createStore(userReducer,compositeWithDevTools(applyMiddleware(logger,thunk)));