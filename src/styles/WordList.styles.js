import styled, { css } from 'styled-components';

export const WordListWrapper = styled.ul`
  padding: 8rem 0 24rem;
  position: relative;
  width: 100%;
  text-align: center;
  background-color: darkgreen;
  overflow: hidden;

  h1 {
    position: relative;
    z-index: 1;
    margin-bottom: 8rem;
    color: white;
  }

  &::after {
    content: '';
    position: absolute;
    top: -50rem;
    right: -50rem;
    background-color: darkred;
    width: 100rem;
    height: 100rem;
    border-radius: 100rem;
    z-index: 0;
  }
`;

export const WordListGrid = styled.div`
  position: relative;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  width: 80%;
  margin: 0 auto;
  z-index: 1;
`;

export const WordListItem = styled.li`
  position: relative;
  background-color: white;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
  padding: 2rem;
  border-radius: 1rem;
  transition: all 0.3s ease-in-out;

  ${({ active }) =>
    active &&
    css`
      z-index: 5;
      transform: scale(1.2, 1.2);
    `}

  ${({ inactive }) =>
    inactive &&
    css`
      opacity: 0.4;
    `}

    ${({ answered }) =>
    answered &&
    css`
      background-color: green;
      color: white;
    `}
`;
