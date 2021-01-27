import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'regenerator-runtime/runtime';
import Listener from './components/Listener';
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
        <AnimatePresence>
          <Switch location={location} key={location.key}>
            <Route path="/:word">
              <Listener />
            </Route>
          </Switch>
        </AnimatePresence>
        <Route path="/">
          <WordList />
        </Route>
      </WordProvider>
    </BrowserRouter>
  );
};

export default App;
