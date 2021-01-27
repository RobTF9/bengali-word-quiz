import React from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import words from '../data/words';
import {
  ListenerInner,
  ListenerWrapper,
  TranscriptDebugger,
} from '../styles/Listener.styles';

const Listener = () => {
  const { pathname } = useLocation();
  const history = useHistory();
  const word = words.find((w) => w[2] === pathname.substring(1))[0];
  const [correct, setCorrect] = React.useState(false);
  const { listening, transcript } = useSpeechRecognition({
    commands: [
      {
        command: word,
        callback: () => setCorrect(true),
        matchInterim: true,
        isFuzzyMatch: true,
      },
    ],
  });

  React.useEffect(() => {
    if (!listening && !correct) {
      void SpeechRecognition.startListening({ language: 'bn-BD' });
    } else if (correct) {
      void SpeechRecognition.stopListening();
      setTimeout(() => history.push('/'), 2000);
    }
  }, [listening, correct]);

  return (
    <>
      <TranscriptDebugger>
        Transcript: {transcript}
      </TranscriptDebugger>
      <ListenerWrapper>
        <ListenerInner>
          <h1>{correct ? 'Well done!' : `Say ${word}`}</h1>
        </ListenerInner>
      </ListenerWrapper>
    </>
  );
};

export default Listener;
