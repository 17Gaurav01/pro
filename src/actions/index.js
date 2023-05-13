// Action Types
export const LOGIN = 'LOGIN';
export const ENROLL = 'ENROLL';

// Action Creators
export const login = (username, password) => {
  return {
    type: LOGIN,
    payload: {
      username,
      password,
    },
  };
};

export const enroll = (name, age) => {
  return {
    type: ENROLL,
    payload: {
      name,
      age,
    },
  };
};
