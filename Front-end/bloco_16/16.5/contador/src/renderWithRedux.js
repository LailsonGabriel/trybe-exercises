// demais imports...
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';
import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup } from '@testing-library/react';
import App from './App';

export const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => ({
    ...render(<Provider store={store}>{component}</Provider>),
    store,
})