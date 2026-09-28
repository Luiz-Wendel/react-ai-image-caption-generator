import react from 'react';
import './App.css';

import { generateCaption } from './models/api';

function App() {
  const [imgSrc, setImgSrc] = react.useState(null);
  const [caption, setCaption] = react.useState("<Caption>");

  async function addCaption() {
    setCaption("Generating caption...");

    const caption = await generateCaption(imgSrc);

    setCaption(caption[0].generated_text);
  }

  return (
    <>
      <h1>Caption Generator</h1>
      <div className="url-form">
        <input onChange={({ target }) => setImgSrc(target.value)}></input>
        <button onClick={addCaption}>Generate</button>
      </div>
      <div className="captioned-image">
        <img src={imgSrc} height={200} style={{ marginBottom: '1em' }}></img>
        <span>{caption}</span>
      </div>
    </>
  )
}

export default App;
