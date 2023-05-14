import React from 'react';
import store from './reducers/store';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* HERE */}
      <App /> {/* Now, App is wrapped in Provider and hence can read from store */}
    </Provider>
  </React.StrictMode>
);