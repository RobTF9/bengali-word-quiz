import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  WordListItem,
  WordListWrapper,
} from '../styles/WordList.styles';

const WordList = ({ words }) => {
  const { pathname } = useLocation();

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
