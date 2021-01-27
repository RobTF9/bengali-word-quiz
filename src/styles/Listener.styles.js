import styled from 'styled-components';

export const ListenerWrapper = styled.div`
  background-color: white;
  bottom: 0;
  box-shadow: 0 -1rem 2rem rgba(0, 0, 0, 0.2);
  padding: 2rem;
  position: fixed;
  width: 100vw;
  z-index: 2;
`;

export const ListenerInner = styled.div`
  margin: 0 auto;
  position: relative;
  text-align: center;
  width: 80%;
`;

export const TranscriptDebugger = styled.div`
  background-color: black;
  color: white;
  position: fixed;
  right: 0;
  top: 0;
`;