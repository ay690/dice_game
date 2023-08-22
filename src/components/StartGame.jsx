import React from "react";
import styled from "styled-components";

const StartGame = () => {
  return (
    <Container>
        <div>
      <img src="./images/dices.png" alt="Dices" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  justify-content: center;
  align-items: center;
  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-end; /* Aligns the content to the right */
    flex-grow: 1; 
    h1{
        font-size: 96px;
        white-space: nowrap;
    }

  }
`;

const Button = styled.button`
  padding: 10px 18px;
  color: white;
  border-radius: 5px;
  background: #000;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  transition: 0.5s background ease-in;
  cursor: pointer;
  &:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;
