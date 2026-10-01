import react from 'react';
import './App.css';

import { generateCaption, translate } from './models/api';

function App() {
  const [imgSrc, setImgSrc] = react.useState(null);
  const [caption, setCaption] = react.useState("<Caption>");
  const [captionPTBR, setCaptionPTBR] = react.useState("<Legenda>");
  const [audioSrc, setAudioSrc] = react.useState(null);

  const captionAudio = react.useRef();

  async function addCaption() {
    setCaption("Generating caption...");

    const caption = await generateCaption(imgSrc);
    const generatedCaption = caption[0].generated_text;

    setCaption(generatedCaption);
    setCaptionPTBR("Traduzindo legenda...");

    const captionPTBR = await translate(generatedCaption);

    setCaptionPTBR(captionPTBR[0].translation_text);

    // TODO: call endpoint
    const audioSource = `http://localhost:5000/audio/${captionPTBR[0].translation_text}.wav`;
    setAudioSrc(audioSource);
  }

  react.useEffect(() => {
    if (captionAudio.current && audioSrc) {
      captionAudio.current.pause();
      captionAudio.current.load();
      captionAudio.current.play();
    }
  }, [audioSrc]);

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
        <audio controls>
          <source src={audioSrc} type="audio/wav" ref={captionAudio} />
        </audio>
      </div>
    </>
  )
}

export default App;
