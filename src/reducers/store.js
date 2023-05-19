import { configureStore } from '@reduxjs/toolkit';
import { LOGIN,ENROLL } from '../actions';


const initialState = {
  entries: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return state;
    case ENROLL:
      const newEntry = {
        id: state.entries.length + 1,
        name: action.payload.name,
        age: action.payload.age,
      };
      return {
        ...state,
        entries: [...state.entries, newEntry],
      };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: {
    reducer: reducer
  }
});

export default store;


