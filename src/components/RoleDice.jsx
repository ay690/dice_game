import React from 'react'
import styled from "styled-components";

const RoleDice = () => {
  return (
   <DiceContainer>
    <div className='dice' >
        <img src='./images/dice/dice_1.png'  alt='Dice 1' />
    </div>
    <p>Click on Dice to roll</p>
   </DiceContainer>
  )
}

export default RoleDice;

const DiceConatiner = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .dice{
        cursor: pointer;
    }

    p{
     font-size: 24px;
    }
`
