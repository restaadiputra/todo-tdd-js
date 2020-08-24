import { createSlice } from '@reduxjs/toolkit';

let nextTodoId = 0;
const initialState = [];

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: {
      prepare(title) {
        return { payload: { title, id: nextTodoId++ } };
      },
      reducer(state, action) {
        const { id, title } = action.payload;
        state.unshift({ id, title, status: false });
      },
    },
    deleteTodoById: (state, action) => {
      const todoIndex = state.findIndex((todo) => todo.id === action.payload);

      if (todoIndex !== -1) {
        state.splice(todoIndex, 1);
      }
    },
    updateTodoById: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.status = !todo.status;
      }
    },
  },
});

export const { addTodo, deleteTodoById, updateTodoById } = todoSlice.actions;

export default todoSlice.reducer;
