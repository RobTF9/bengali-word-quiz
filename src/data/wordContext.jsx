import React from 'react';
import adjectives from './adjectives';
import adverbs from './adverbs';
import conjunctions from './conjunction';
import determiners from './determiners';
import exclamations from './exclamations';
import nouns from './nouns';
import pronouns from './pronouns';
import verbs from './verbs';

const WordContext = React.createContext();

export const WordProvider = ({ children }) => {
  const [config, setConfig] = React.useState({
    adjectives: true,
    adverbs: true,
    conjunctions: true,
    determiners: true,
    exclamations: true,
    nouns: true,
    pronouns: true,
    verbs: true,
  });

  const [words, setWords] = React.useState([]);

  React.useEffect(() => {
    let newArray = [];
    if (config.adjectives) {
      newArray = [...newArray, ...adjectives];
    }
    if (config.adverbs) {
      newArray = [...newArray, ...adverbs];
    }
    if (config.conjunctions) {
      newArray = [...newArray, ...conjunctions];
    }
    if (config.determiners) {
      newArray = [...newArray, ...determiners];
    }
    if (config.exclamations) {
      newArray = [...newArray, ...exclamations];
    }
    if (config.nouns) {
      newArray = [...newArray, ...nouns];
    }
    if (config.pronouns) {
      newArray = [...newArray, ...pronouns];
    }
    if (config.verbs) {
      newArray = [...newArray, ...verbs];
    }
    setWords(newArray);
  }, [config]);

  return (
    <WordContext.Provider value={{ words, config, setConfig }}>
      {children}
    </WordContext.Provider>
  );
};

export default WordContext;
