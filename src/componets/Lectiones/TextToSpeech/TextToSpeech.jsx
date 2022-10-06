import React from 'react';
import Player from './Player';
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://text-to-speech27.p.rapidapi.com/speech',
  params: { text: 'Vale, mi amice', lang: 'la' },
  headers: {
    'X-RapidAPI-Key': '827763f66amshec18edddfe11b86p14e8a9jsn7a61f7d41605',
    'X-RapidAPI-Host': 'text-to-speech27.p.rapidapi.com',
  },
};

let data = '';

function handleClick() {
  console.log('click');
  axios
    .request(options)
    .then(function (response) {
      //   console.log(response);
      //      let audioHear = URL.createObjectURL(response.data);

      data = response.data;
      converyBinary();
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
}

function convertDataURIToBinary(dataURI) {
  var BASE64_MARKER = ';base64,';
  var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
  var base64 = dataURI.substring(base64Index);
  var raw = window.atob(base64);
  var rawLength = raw.length;
  var array = new Uint8Array(new ArrayBuffer(rawLength));

  for (let i = 0; i < rawLength; i++) {
    array[i] = raw.charCodeAt(i);
  }
  return array;
}

function converyBinary() {
  var binary = convertDataURIToBinary(data);
  var blob = new Blob([binary], { type: 'audio/ogg' });
  var blobUrl = URL.createObjectURL(blob);
  console.log(blobUrl);
  //   $('body').append('<br> Blob URL : <a href="'+blobUrl+'" target="_blank">'+blobUrl+'</a><br>');
  //   $("#source").attr("src", blobUrl);
  //   $("#audio")[0].pause();
  //   $("#audio")[0].load();//suspends and restores all audio element
  //   $("#audio")[0].oncanplaythrough =  $("#audio")[0].play();
}

function TextToSpeech() {
  return (
    <div>
      <button onClick={() => handleClick()}>TextToSpeech</button>
      {/* <audio id="audio" controls>
        <source id="source" src="../audio/one/amo.mp3" type="audio/ogg" />
      </audio> */}
       {/* <figure>
        <figcaption>Listen to the T-Rex:</figcaption>
        <audio controls src="/media/cc0-audio/t-rex-roar.mp3">
          <a href="/media/cc0-audio/t-rex-roar.mp3">Download audio</a>
        </audio>
      </figure>  */}
      <figure>
    <figcaption>Listen to the T-Rex:</figcaption>
    <audio
        controls
        src="../">
            <a href="/media/cc0-audio/t-rex-roar.mp3">
                Download audio
            </a>
    </audio>
</figure>
<Player />
    </div>
  );
}

export default TextToSpeech;
