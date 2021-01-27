import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import WordContext from '../data/wordContext';
import {
  WordListItem,
  WordListWrapper,
  WordListGrid,
} from '../styles/WordList.styles';
import { ListenerOverlay } from '../styles/Listener.styles';

const WordList = () => {
  const { pathname } = useLocation();
  const { words, correct } = React.useContext(WordContext);

  const path = pathname.substring(1);

  return (
    <WordListWrapper>
      <h1>Click on a word, then say it in Bengali</h1>
      <WordListGrid>
        {pathname !== '/' && <ListenerOverlay to="/" />}
        {words.map((w) => (
          <WordItem
            {...{
              key: w[2],
              word: w,
              answered: correct.find((c) => c === w) ? true : false,
              active: pathname !== '/' && w[2] === path,
              inactive: pathname !== '/' && w[2] !== path,
            }}
          />
        ))}
      </WordListGrid>
    </WordListWrapper>
  );
};

const WordItem = ({ answered, word, active, inactive }) => {
  const [bengali, pronounciation, english] = word;
  return (
    <WordListItem {...{ answered, active, inactive }}>
      <Link to={english}>
        {english.replace(/-/g, ' ')}
        {answered && ` / ${pronounciation} / ${bengali}`}
        {answered && <FiCheckCircle />}
      </Link>
    </WordListItem>
  );
};

export default WordList;
