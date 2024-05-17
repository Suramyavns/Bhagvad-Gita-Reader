import logo from "./bglogo.png";
import "./App.css";
import React from "react";
import music from "./bgmusic.mp3";
import { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import Reader from "./reader";
import Chapters from "./chapters";

function App() {
  const [currChapter, setCurrChapter] = useState({});
  const [state, setState] = useState({
    play: false,
    btntext: "Play OM chant",
  });
  const [audio] = useState(new Audio(music));
  audio.loop = true;
  const handleAudioPlay = () => {
    if (!state.play) {
      audio.play();
      setState({ play: true, btntext: "Pause OM chant" });
    } else {
      audio.pause();
      setState({ play: false, btntext: "Play OM chant" });
    }
  };
  return (
    <>
      <header className="App-header">
        <img src={logo} className="logo" alt="Bhagvad Gita Logo"></img>
        <p id="top" className="heading">
          Read Bhagvad Geeta
        </p>
        <button
          className="nav-btn"
          style={{ backgroundColor: "#FF784F", width: "fit-content" }}
          onClick={handleAudioPlay}
        >
          {state.btntext}
        </button>
      </header>
      <main className="main-container">
        <Chapters
          shareData={(data) => {
            setCurrChapter(data);
          }}
        />
        <Reader chapter={currChapter} />
      </main>
      <footer className="App-header">
        <p className="heading">
          Made with <i className="fa fa-heart" style={{ color: "maroon" }}></i>{" "}
          by Suramya Didwania
        </p>
      </footer>
    </>
  );
}

export default App;
