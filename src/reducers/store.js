import { configureStore } from '@reduxjs/toolkit';
import { login, enroll } from '../actions';


const initialState = {
  entries: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case login:
      // Perform login logic if needed
      // console.log(state);
      return state;
    case enroll:
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

// Create your Redux store
// Create your Redux store
const store = configureStore({
  reducer: {
    reducer: reducer
  }
});

// Export your store
export default store;


