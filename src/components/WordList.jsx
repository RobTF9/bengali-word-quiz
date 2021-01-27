import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import WordContext from '../data/wordContext';
import {
  WordListItem,
  WordListWrapper,
  WordListGrid,
} from '../styles/WordList.styles';

const WordList = () => {
  const { pathname } = useLocation();
  const { words, correct } = React.useContext(WordContext);

  const path = pathname.substring(1);

  return (
    <WordListWrapper>
      <h1>Click on a word, then say it in Bengali</h1>
      <WordListGrid>
        {words.map((w) => (
          <Link to={w[2]} key={w[2]}>
            <WordItem
              {...{
                word: w,
                answered: correct.find((c) => c === w) ? true : false,
                active: pathname !== '/' && w[2] === path,
                inactive: pathname !== '/' && w[2] !== path,
              }}
            />
          </Link>
        ))}
      </WordListGrid>
    </WordListWrapper>
  );
};

const WordItem = ({ answered, word, active, inactive }) => {
  const [bengali, pronounciation, english] = word;
  return (
    <WordListItem {...{ answered, active, inactive }}>
      {english.replace(/-/g, ' ')}
      {answered && ` / ${pronounciation} / ${bengali}`}
    </WordListItem>
  );
};

export default WordList;
