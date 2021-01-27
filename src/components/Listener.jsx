import React from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import WordContext from '../data/wordContext';
import {
  ListenerInner,
  ListenerWrapper,
  TranscriptDebugger,
} from '../styles/Listener.styles';

const Listener = () => {
  const { pathname } = useLocation();
  const history = useHistory();

  const { words } = React.useContext(WordContext);

  const word =
    words.length > 1
      ? words.find((w) => w[2] === pathname.substring(1))
      : ['', '', ''];

  const [bengali, pronounciation] = word;

  const [correct, setCorrect] = React.useState(false);
  const [attempts, setAttempts] = React.useState(0);

  const { listening, transcript } = useSpeechRecognition({
    commands: [
      {
        command: bengali,
        callback: () => setCorrect(true),
        matchInterim: true,
        isFuzzyMatch: true,
        fuzzyMatchingThreshold: 0.2,
      },
    ],
  });

  React.useEffect(() => {
    if (!listening && !correct) {
      void SpeechRecognition.startListening({ language: 'bn-BD' });
      setAttempts(attempts + 1);
    } else if (correct) {
      void SpeechRecognition.stopListening();
      setTimeout(() => history.push('/'), 2000);
    }
  }, [listening, correct]);

  return (
    word && (
      <>
        <TranscriptDebugger>
          Transcript: {transcript}
        </TranscriptDebugger>
        <ListenerWrapper>
          <ListenerInner>
            <h1>
              {correct ? 'Well done!' : `Can you say ${bengali} ?`}
            </h1>
            {attempts > 3 && <p>It's pronounced {pronounciation}</p>}
          </ListenerInner>
        </ListenerWrapper>
      </>
    )
  );
};

export default Listener;
