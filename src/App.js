import './App.css';
import Player from './components/Player';

function App() {
  /* const song = "./static/music.mp3";
  const audio = new Audio(song);
  audio.play();

  console.log(audio); */

  return (
    <div className="App">
      <Player />
    </div>
  );
}

export default App;
