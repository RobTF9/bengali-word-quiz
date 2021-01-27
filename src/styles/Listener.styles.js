import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ListenerWrapper = styled(motion.div)`
  background-color: #2b78f6;
  bottom: 0;
  box-shadow: 0 -1rem 2rem rgba(0, 0, 0, 0.2);
  padding: 8rem 0;
  position: fixed;
  width: 100vw;
  z-index: 2;
`;

export const ListenerInner = styled.div`
  margin: 0 auto;
  position: relative;
  text-align: center;
  width: 80%;

  * {
    color: white;
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
