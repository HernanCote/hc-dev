import React from 'react';

import { GlobalStyle } from './components/Foundation';
import Navbar from './components/Navbar';

import About from './pages/About';

const App = () => (
  <div className="App">
    <GlobalStyle />
    <Navbar />
    <About />
  </div>
);

export default App;
