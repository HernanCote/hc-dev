import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { GlobalStyle } from './components/Foundation';
import Navbar from './components/Navbar';

import About from './pages/About';
import Contact from './pages/Contact';
import MyWork from './pages/MyWork';
import MyWorkDetail from './pages/MyWork/detail';

const App = () => (
  <>
    <Router>
      <GlobalStyle />
      <Navbar />
      <Route path="/my-work" exact component={MyWork} />
      <Route path="/my-work/:id" component={MyWorkDetail} />
      <Route path="/contact" component={Contact} />
      <Route path="/" exact component={About} />
    </Router>
  </>
);

export default App;
