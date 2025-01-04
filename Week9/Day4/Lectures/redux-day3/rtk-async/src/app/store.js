import { configureStore, combineReducers } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice";
import todosReducer from '../features/todos/todosSlice'


const appReducer = combineReducers({
  counterReducer,
  todosReducer
});

const store = configureStore({
  reducer: appReducer,
});

export default store;
