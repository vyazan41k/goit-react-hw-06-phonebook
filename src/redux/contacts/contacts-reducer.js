import { combineReducers } from 'redux';
import actions from './contacts-actoins';
import { createReducer } from '@reduxjs/toolkit';

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.filterContacts]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
