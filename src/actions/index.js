// Action Types
export const LOGIN = 'login';
export const ENROLL = 'enroll';

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
