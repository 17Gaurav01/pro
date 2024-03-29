import React, { useState } from "react";

import { Provider } from "react-redux";
import store from "./reducers/store.js";
import LoginPage from "./components/LoginPage";
import DashboardPage from "./components/DashboardPage";
import { LOGIN, login } from "./actions/index.js";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(0);

  const handleLogin = () => {
    setIsLoggedIn(1);
    // dispatch(login(name, age));
  };

  return (
    <div>
      {!isLoggedIn ? <LoginPage onLogin={handleLogin} /> : <DashboardPage />}
    </div>
  );
};

export default App;
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { Provider } from 'react-redux';

// import rootReducer from './reducers'

// const store = createStore(rootReducer)

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}> {/* HERE */}
//       <App /> {/* Now, App is wrapped in Provider and hence can read from store */}
//     </Provider>
//   </React.StrictMode>
// );
