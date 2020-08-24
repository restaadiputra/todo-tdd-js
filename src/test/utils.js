import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import todo from 'store/todoSlice';

export const renderWithRouter = (component) => {
  return {
    ...render(<BrowserRouter>{component}</BrowserRouter>),
  };
};

export const renderWithStore = (
  component,
  initialState = [],
  store = configureStore({
    reducer: { todo },
    preloadedState: { todo: initialState },
  })
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  };
};
