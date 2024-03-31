import logo from './bglogo.png';
import './App.css';
import music from './bgmusic.mp3'
import { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css'

function App() {
  const [state,setState] = useState({
    'play':false,
    'btntext':'Play OM chant',
  });
  const [audio] = useState(new Audio(music));
  audio.loop=true;
  const handleAudioPlay = ()=>{
    if(!state.play){
      audio.play();
      setState({'play':true,'btntext':'Pause OM chant'})
    }
    else{
      audio.pause();
      setState({'play':false,'btntext':'Play OM chant'})
    }
  }

  return (
    <>
    <header className='App-header'>
      <img src={logo} className='logo' alt='Bhagvad Gita Logo'></img>
      <p id='top' className='heading'>Read Bhagvad Geeta</p>
      <div className='nav-btns'>
        <button className='nav-btn'>Full Read</button>
        <button className='nav-btn'>Chapters</button>
      </div>
      <button className='nav-btn' style={{backgroundColor:'#FF784F',width:'fit-content'}} onClick={handleAudioPlay}>{state.btntext}</button>
    </header>
    <main className='main-container'></main>
    <footer className='App-header'>
      <p className='heading'>Made with <i className='fa fa-heart' style={{color:'maroon'}}></i>  by Suramya Didwania</p>
    </footer>
    </>
  );
}

export default App;
