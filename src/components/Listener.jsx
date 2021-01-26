import React from 'react';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

const Listener = ({ word }) => {
  const [correct, setCorrect] = React.useState(false);

  const { listening } = useSpeechRecognition({
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
      void SpeechRecognition.startListening({ language: 'bn' });
    } else if (correct) {
      void SpeechRecognition.stopListening();
    }
  }, [listening, correct]);

  return <div>{correct ? 'Well done!' : `Say ${word}`}</div>;
};

export default Listener;
