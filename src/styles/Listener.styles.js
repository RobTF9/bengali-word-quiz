import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ListenerWrapper = styled(motion.div)`
  background-color: #2b78f6;
  bottom: 0;
  box-shadow: 0 -1rem 2rem rgba(0, 0, 0, 0.2);
  padding: 8rem 0;
  position: fixed;
  width: 100vw;
  z-index: 6;
`;

export const ListenerOverlay = styled(Link)`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 4;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export const ListenerInner = styled.div`
  margin: 0 auto;
  position: relative;
  text-align: center;
  width: 80%;

  * {
    color: white;
  }

  button {
    width: 4rem;
    height: 4rem;

    svg {
      width: 100%;
      height: 100%;
    }
  }
`;

export const TranscriptDebugger = styled.div`
  background-color: black;
  font-size: 1.8rem;
  padding: 2rem;
  color: white;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
`;
