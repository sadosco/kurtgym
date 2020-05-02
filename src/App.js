import React from 'react';
import './config/ReactotronConfig';

import { BrowserRouter } from 'react-router-dom';

import Header from './Components/Header';
import Routes from './routes';

import GlobalStyles from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
