import React from 'react';
import shuffle from '../utils/shuffle';
import adjectives from './adjectives';
import adverbs from './adverbs';
import conjunctions from './conjunction';
import determiners from './determiners';
import exclamations from './exclamations';
import nouns from './nouns';
import pronouns from './pronouns';
import prepositions from './preposition';
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
    prepositions: true,
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
    if (config.prepositions) {
      newArray = [...newArray, ...prepositions];
    }
    newArray = shuffle(newArray);
    setWords(newArray);
  }, [config]);

  const [correct, setCorrect] = React.useState([]);

  const correctAnswer = (answer) => {
    setCorrect([...correct, answer]);
  };

  return (
    <WordContext.Provider
      value={{ words, config, setConfig, correctAnswer, correct }}
    >
      {children}
    </WordContext.Provider>
  );
};

export default WordContext;
