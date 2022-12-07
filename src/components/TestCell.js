import { useState } from "react";
import styled from "styled-components";

const StyledTestCellCover = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px;
`;

const StyledTestCell = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
  &.cell {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 100%;
    &.white {
      background: #ffffff;
      animation-name: kf-change-white-cell;
      animation-duration: 0.3s;
      animation-iteration-count: 1;
    }
    &.black {
      background-color: #000000;
      animation-name: kf-change-black-cell;
      animation-duration: 0.3s;
      animation-iteration-count: 1;
    }
  }
  @keyframes kf-change-white-cell {
    0% {
      transform: perspective(480px) rotateY(0deg);
      background-color: #000000;
    }

    50% {
      background-color: #ffffff;
    }

    100% {
      background-color: #ffffff;
      transform: perspective(480px) rotateY(180deg);
    }
  }
  @keyframes kf-change-black-cell {
    0% {
      transform: perspective(480px) rotateY(0deg);
      background-color: #ffffff;
    }

    50% {
      background-color: #000000;
    }

    100% {
      background-color: #000000;
      transform: perspective(480px) rotateY(180deg);
    }
  }
`;

const TestCell = () => {
  const [isBlack, setIsBlack] = useState(true);
  return (
    <StyledTestCellCover>
      <StyledTestCell
        className={`cell ${isBlack ? "black" : "white"}`}
        onClick={() => setIsBlack((state) => !state)}
      ></StyledTestCell>
    </StyledTestCellCover>
  );
};

export default TestCell;
