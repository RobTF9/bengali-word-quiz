import React from 'react';
import 'regenerator-runtime/runtime';
import WordList from './components/WordList';
import words from './data/words';
import Reset from './styles/Reset';

const App = () => {
  return (
    <>
      <Reset />
      <WordList {...{ words }} />
    </>
  );
};

export default App;
