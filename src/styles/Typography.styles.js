import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
  *,
  button,
  input,
  label,
  select,
  button,
  textarea {
    font-family: 'Baloo Da 2', cursive;
    -webkit-font-smoothing: antialiased; /* Chrome, Safari */
    -moz-osx-font-smoothing: grayscale; /* Firefox */
    text-rendering: optimizeLegibility;
    font-weight: 400;
    color: black;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
  }

  h1 {
    font-size: 3.6rem;
    line-height: 1.1;
  }

  h2 {
    font-size: 2.8rem;
    line-height: 1.1;
  }

  h3 {
    font-size: 2.4rem;
    line-height: 1.1;
  }

  h4 {
    font-size: 1.8rem;
    line-height: 1.1;
  }

  h5 {
    font-size: 1.2rem;
    line-height: 1.1;
  }

  p,
  a,
  li,
  button,
  label,
  input,
  textarea,
  button {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.4rem;
  }

  strong {
    font-weight: 600;
  }

  a {
    cursor: pointer;
    font-weight: 600;
    color: blue;

    &:hover {
      color: lime;
    }
  }

  button {
    cursor: pointer;
    font-weight: 600;
    color: blue;

    &:hover {
      color: lime;
    }
  }

  @media (min-width: 600px) {
    h1 {
      font-size: 4.2rem;
    }

    h2 {
      font-size: 3.2rem;
    }

    h3 {
      font-size: 2.6rem;
    }
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 4.8rem;
    }

    h2 {
      font-size: 3.6rem;
    }

    h3 {
      font-size: 2.8rem;
    }
  }
`;

export default Typography;
