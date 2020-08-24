import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserQRCodeReader } from '@zxing/library';

function App() {
  const reader = new BrowserQRCodeReader();
  reader.listVideoInputDevices()
  .then(videoInputDevices => {
    reader.decodeOnceFromVideoDevice(videoInputDevices[0].deviceId, "video")
    .then(result => { console.log(result.text)})
    .catch(err => console.log(err));
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <video 
          id="video"
          height="300"
          width="400"
          style={{border: "5px solid red"}}
        >
        </video>        
      </header>
    </div>
  );
}

export default App;
