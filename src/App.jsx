import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
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
        <Route path="/:word">
          <Listener />
        </Route>
        <Route path="/">
          <WordList />
        </Route>
      </WordProvider>
    </BrowserRouter>
  );
};

export default App;
