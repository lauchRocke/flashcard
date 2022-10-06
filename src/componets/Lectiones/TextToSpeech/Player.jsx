import React, { useState, useEffect } from "react";
import amabo from '../../audio/one/vocabulary/amabo.mp3'

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      {/* <button onClick={toggle}>{playing ? "Pause" : "Play"}</button> */}
      <figure>
    <figcaption>Listen to the T-Rex:</figcaption>
    <audio
        controls
        src={amabo}>
            <a href="/media/cc0-audio/t-rex-roar.mp3">
                Download audio
            </a>
    </audio>
</figure>
    </div>
  );
};

export default Player;