import { createSlice, createSelector } from '@reduxjs/toolkit';
import filterType from 'configs/filter';

const { all, complete, notComplete } = filterType;

const filterSlice = createSlice({
  name: 'filter',
  initialState: all.value,
  reducers: {
    setFilter(_, action) {
      return action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export const selectTodo = (state) => state.todo;
export const selectFilter = (state) => state.filter;

export const filteredTodo = createSelector(
  [selectTodo, selectFilter],
  (todoList, filter) => {
    switch (filter) {
      case all.value:
        return todoList;
      case complete.value:
        return todoList.filter((todo) => todo.status);
      case notComplete.value:
        return todoList.filter((todo) => !todo.status);
      default:
        return [];
    }
  }
);

export default filterSlice.reducer;
