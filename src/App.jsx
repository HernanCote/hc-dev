import React from 'react';
import {
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { GlobalStyle } from './components/Foundation';
import Navbar from './components/Navbar';

import About from './pages/About';
import Contact from './pages/Contact';
import MyWork from './pages/MyWork';
import MyWorkDetail from './pages/MyWork/detail';

const App = () => {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <AnimatePresence
        exitBeforeEnter
      >
        <Switch
          location={location}
          key={location.pathname}
        >
          <Route path="/my-work" exact component={MyWork} />
          <Route path="/my-work/:id" component={MyWorkDetail} />
          <Route path="/contact" component={Contact} />
          <Route path="/" exact component={About} />
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default App;
