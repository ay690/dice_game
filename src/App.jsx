import { useState } from 'react'
import styled from "styled-components";
import StartGame from './components/StartGame';

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted(prev => !prev); 
    // or setIsGameStarted(!isGameStarted);
  }

  return (
    <>
     <StartGame />
       
    </>
  )
}

export default App
