import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'regenerator-runtime/runtime';
import Footer from './components/Footer';
import Listener from './components/Listener';
import Menu from './components/Menu';
import WordList from './components/WordList';
import { WordProvider } from './data/wordContext';
import Reset from './styles/Reset.styles';
import Typography from './styles/Typography.styles';

const App = () => {
  return (
    <BrowserRouter>
      <Reset />
      <Typography />
      <WordProvider>
        <Menu />
        <Route path="/:word">
          <AnimatePresence exitBeforeEnter>
            <Listener />
          </AnimatePresence>
        </Route>

        <Route path="/">
          <WordList />
        </Route>
      </WordProvider>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
