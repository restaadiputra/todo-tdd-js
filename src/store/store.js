import { configureStore } from '@reduxjs/toolkit';
import todo from './todoSlice';
import filter from './filterSlice';

export default configureStore({
  reducer: {
    todo,
    filter,
  },
});
