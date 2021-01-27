import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MenuHeader = styled.header`
  display: flex;
  background-color: transparent;
  justify-content: space-between;
  position: absolute;
  z-index: 100;
  width: 100vw;
  padding: 2rem;

  p strong {
    color: lightgreen;
  }

  button {
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

export const MenuDrawer = styled(motion.div)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1000;

  button[type='button'] {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  form {
    position: absolute;
    z-index: 2;
    right: 0;
    top: 0;
    height: 100%;
    padding: 2rem;
    background-color: darkgreen;
    box-shadow: -1rem 0 2rem rgba(0, 0, 0, 0.2);

    * {
      color: white;
    }

    h3 {
      border-bottom: 1px solid lightgreen;
      padding-bottom: 2rem;
    }

    label {
      margin: 4rem 0;
      display: block;
      text-transform: capitalize;
      display: flex;
      align-items: center;

      input {
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
      }
    }

    button {
      background-color: #2b78f6;
      box-shadow: inset 0 -0.4rem rgba(0, 0, 0, 0.2),
        inset 0 0.2rem 0.2rem 0 rgba(255, 255, 255, 0.4);
      width: 100%;
      padding: 2rem;
      border-radius: 1rem;
    }
  }
`;
