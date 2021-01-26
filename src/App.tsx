import * as React from 'react';
import 'regenerator-runtime/runtime';
import Listener from './components/Listener';

const App = (): JSX.Element => {
  return <Listener {...{ word: 'word' }} />;
};

export default App;
