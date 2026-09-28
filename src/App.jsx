import './App.css'

function App() {
  return (
    <>
      <h1>Caption Generator</h1>
      <div className="url-form">
        <input></input>
        <button>Generate</button>
      </div>
      <div className="captioned-image">
        <img height={200} width={200} style={{ marginBottom: '1em' }}></img>
        <span>Caption</span>
      </div>
    </>
  )
}

export default App
