import { configureStore } from '@reduxjs/toolkit';
import ageReducer from './slices/ageSlice'; 

const store = configureStore({
  reducer: {
    age: ageReducer,
  },
});

export default store;