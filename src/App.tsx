import * as React from 'react';
import 'regenerator-runtime/runtime';
import WordList from './components/WordList';
import words from './data/words';

const App = (): JSX.Element => {
  return <WordList {...{ words }} />;
};

export default App;
