import styled, { css } from 'styled-components';

export const WordListWrapper = styled.ul`
  margin: 8rem auto 24rem;
  width: 80%;
  text-align: center;

  h1 {
    margin-bottom: 8rem;
  }
`;

export const WordListGrid = styled.div`
  display: grid;
  gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
`;

export const WordListItem = styled.li`
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  padding: 2rem;
  border-radius: 2rem;
  transition: all 0.3s ease-in-out;

  ${({ active }) =>
    active &&
    css`
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
