import React from "react";
import styled from "styled-components";

const TotalScore = () => {
  return (
    <ScoreCard>
      <h1>0</h1>
      <p>Total Score</p>
    </ScoreCard>
  );
};

export default TotalScore;

const ScoreCard = styled.div`
max-width: 200px;
/* background-color: red; */
text-align: center;
   h1{
    font-size: 100px;
   } 
   p{
    font-size: 24px;
    font-weight: 500;
   }
`
