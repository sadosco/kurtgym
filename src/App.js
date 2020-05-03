import React from 'react';
import './config/ReactotronConfig';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

import store from './store';
import Routes from './routes';

import GlobalStyles from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
        <GlobalStyles />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
