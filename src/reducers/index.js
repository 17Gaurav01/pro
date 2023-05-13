import { LOGIN, ENROLL } from '../actions';

const initialState = {
  entries: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      // Perform login logic if needed
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

export default reducer;
