import styled, { css } from 'styled-components';

export const WordListWrapper = styled.ul`
  padding: 16rem 0 24rem;
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
  background-color: #2b78f6;
  box-shadow: inset 0 -0.4rem rgba(0, 0, 0, 0.2),
    inset 0 0.2rem 0.2rem 0 rgba(255, 255, 255, 0.4);
  color: white;
  min-height: 10rem;
  border-radius: 1rem;
  transition: all 0.3s ease-in-out;

  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }

  svg {
    stroke: white;
    position: absolute;
    top: 1rem;
    left: 1rem;
    width: 2rem;
    height: 2rem;
  }

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
      border: 0.1rem lightgreen solid;
      pointer-events: none !important;
      box-shadow: none;
    `}
`;
