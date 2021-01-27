import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  margin-top: auto;
  width: 100vw;
  padding: 2rem;
  display: flex;
  justify-content: space-between;

  * {
    color: white;
  }

  a:last-of-type {
    color: white;
    display: flex;
    align-items: center;

    svg {
      stroke: white;
    }

    svg {
      margin-right: 0.5rem;
    }

    &:hover {
      color: lightgreen;

      svg {
        stroke: lightgreen;
      }
    }
  }
`;
