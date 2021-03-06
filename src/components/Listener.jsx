import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import WordContext from '../data/wordContext';
import {
  ListenerInner,
  ListenerWrapper,
} from '../styles/Listener.styles';
import { FiPlayCircle } from 'react-icons/fi';

const Listener = () => {
  const { pathname } = useLocation();
  const history = useHistory();
  const { words, correctAnswer } = React.useContext(WordContext);
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
        fuzzyMatchingThreshold: 0.8,
      },
    ],
  });

  const audioEl = React.useRef();
  const play = () => {
    audioEl.current.play();
  };

  React.useEffect(() => {
    if (!listening && !correct) {
      SpeechRecognition.startListening({ language: 'bn-BD' });
      setAttempts(attempts + 1);
    } else if (correct) {
      correctAnswer(word);
      SpeechRecognition.stopListening();
      setTimeout(() => history.push('/'), 2000);
    }
  }, [listening, correct]);

  return (
    word && (
      <>
        <ListenerWrapper
          {...{
            layout: true,
            initial: {
              height: 0,
              opacity: 0,
            },
            animate: {
              height: 'auto',
              opacity: 1,
            },
            exit: {
              height: 0,
              opacity: 0,
            },
            transition: {
              stiffness: 300,
            },
          }}
        >
          <ListenerInner>
            <h1>
              {correct ? 'Well done!' : `Can you say ${bengali} ?`}
            </h1>
            <p>
              {transcript ? ` You're saying: ${transcript}` : '...'}{' '}
            </p>
            {attempts > 3 && <p>It's pronounced {pronounciation}</p>}
            {bengali && (
              <audio
                ref={audioEl}
                id="tts-audio"
                src={`https://translate.google.com/translate_tts?ie=UTF-8&tl=bn-IN&client=tw-ob&q=${bengali}`}
              />
            )}
            {audioEl && (
              <button onClick={play}>
                <FiPlayCircle />
              </button>
            )}
          </ListenerInner>
        </ListenerWrapper>
      </>
    )
  );
};

export default Listener;
