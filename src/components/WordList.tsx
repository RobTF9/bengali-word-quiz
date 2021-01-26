import * as React from 'react';

interface Props {
  words: string[][];
}

const WordList = ({ words }: Props): JSX.Element => {
  return (
    <ul>
      {words.map((word) => (
        <li key={word[2]}>{word[2]}</li>
      ))}
    </ul>
  );
};

export default WordList;
