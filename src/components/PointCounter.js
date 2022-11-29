import { useEffect, useState } from "react";
import styled from "styled-components";
import { useTurn } from "../context/TurnContext";
import { useSelector } from "react-redux";

const StyledPointCounter = styled.div`
  font-size: 24px;
  font-weight: 800;
  span.red {
    color: red;
  }
`;

// 黒と白の数を数えるカウンター関数
const counter = (othello, color) => {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (othello[i][j] === color) {
        count++;
      }
    }
  }
  return count;
};

const PointCounter = () => {
  const othello = useSelector((state) => state.othello);

  const turn = useTurn();
  const [blackCount, setBlackCount] = useState(2);
  const [whiteCount, setWhiteCount] = useState(2);

  useEffect(() => {
    setBlackCount(counter(othello, "black"));
    setWhiteCount(counter(othello, "white"));
  }, [othello]);

  return (
    <StyledPointCounter turn={turn}>
      <span className={`${turn === "black" ? "red" : ""}`}>black</span>:
      {blackCount} vs{" "}
      <span className={`${turn === "white" ? "red" : ""}`}>white</span>:{" "}
      {whiteCount}
    </StyledPointCounter>
  );
};

export default PointCounter;
