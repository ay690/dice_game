import { useState } from 'react'
import styled from "styled-components";
import StartGame from './components/StartGame';
import GamePlay from './components/GamePlay';

function App() {
  const [isGameStarted, setIsGameStarted] = useState(true);

  const toggleGamePlay = () => {
    setIsGameStarted(prev => !prev); 
  }

  return (
    <>
    {isGameStarted ? <GamePlay /> : <StartGame toggle = {toggleGamePlay} />}
     {/* <StartGame /> */}
    </>
  )
}

export default App
