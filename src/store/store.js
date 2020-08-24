import { configureStore } from '@reduxjs/toolkit';
import todo from './todoSlice';

export default configureStore({
  reducer: {
    todo,
  },
});
