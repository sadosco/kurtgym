import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import './config/ReactotronConfig';
import { Provider } from 'react-redux';

import { Router } from 'react-router-dom';
import history from './services/history';

import { store, persistor } from './store';
import Routes from './routes';

import GlobalStyles from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyles />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
