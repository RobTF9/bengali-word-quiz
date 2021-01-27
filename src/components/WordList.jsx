import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import WordContext from '../data/wordContext';
import {
  WordListItem,
  WordListWrapper,
} from '../styles/WordList.styles';

const WordList = () => {
  const { pathname } = useLocation();
  const { words } = React.useContext(WordContext);
  return (
    <WordListWrapper>
      {words.map((w) => (
        <Link to={w[2]} key={w[2]}>
          <WordListItem
            active={
              pathname !== '/' && w[2] === pathname.substring(1)
            }
            inactive={
              pathname !== '/' && w[2] !== pathname.substring(1)
            }
          >
            {w[2]}
          </WordListItem>
        </Link>
      ))}
    </WordListWrapper>
  );
};

export default WordList;
