import React, { useState, useEffect } from 'react';
import amabo from '../audio/one/vocabulary/amabo.mp3';

const useAudio = ({}) => {
  const [audio] = useState(new Audio({}));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  return [playing, toggle];
};

const Player = ({}) => {
  return (
    <div>
      <figure>
        <figcaption>Listen to the vocabulary:</figcaption>
        <audio controls src={amabo}></audio>
      </figure>
    </div>
  );
};

export default Player;
