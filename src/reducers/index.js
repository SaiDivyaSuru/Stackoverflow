import { combineReducers } from "redux";
import authReducer from "./auth";
import CurrentUserReducer from './currentUser'
import questionsReducer from './questions.js'

export default combineReducers({
    authReducer,
    CurrentUserReducer,
    questionsReducer
})