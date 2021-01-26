import React from 'react';

const WordList = ({ words }) => {
  return (
    <ul>
      {words.map((word) => (
        <li key={word[2]}>{word[2]}</li>
      ))}
    </ul>
  );
};

export default WordList;
