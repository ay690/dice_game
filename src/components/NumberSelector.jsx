import React, { useState } from "react";
import styled from "styled-components";

const NumberSelector = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setSelectedNumber] = useState();

  return (
    <NumberSelector>
      <div className="flex">
        {arr.map((val, idx) => (
          <Box
            isSelected={val === selectedNumber}
            key={idx}
            onClick={() => setSelectedNumber(val)}
          >
            {val}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelector>
  );
};

export default NumberSelector;


const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  
  .flex {
    display: flex;
    gap: 24px;
  }
  p{
    font-size: 24px;
    font-weight: 700;
  }
`;

const Box = styled.div`
  width: 72px;
  height: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
