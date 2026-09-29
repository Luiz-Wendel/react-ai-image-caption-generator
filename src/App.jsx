import react from 'react';
import './App.css';

import { generateCaption, translate } from './models/api';

function App() {
  const [imgSrc, setImgSrc] = react.useState(null);
  const [caption, setCaption] = react.useState("<Caption>");
  const [captionPTBR, setCaptionPTBR] = react.useState("<Legenda>");

  async function addCaption() {
    setCaption("Generating caption...");

    const caption = await generateCaption(imgSrc);
    const generatedCaption = caption[0].generated_text;

    setCaption(generatedCaption);
    setCaptionPTBR("Traduzindo legenda...");

    const captionPTBR = await translate(generatedCaption);

    setCaptionPTBR(captionPTBR);
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
        <span>{captionPTBR}</span>
      </div>
    </>
  )
}

export default App;
