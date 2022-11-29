import { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const StyledPointCounter = styled.div`
  font-size: 24px;
  font-weight: 800;
  span.red {
    color: red;
  }
`;

// 黒と白の数を数えるカウンター関数
const counter = (board, color) => {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] === color) {
        count++;
      }
    }
  }
  return count;
};

const PointCounter = () => {
  const board = useSelector((state) => state.othello.board);
  const turnColor = useSelector((state) => state.info.turnColor);

  const [blackCount, setBlackCount] = useState(2);
  const [whiteCount, setWhiteCount] = useState(2);

  useEffect(() => {
    setBlackCount(counter(board, "black"));
    setWhiteCount(counter(board, "white"));
  }, [board]);

  return (
    <StyledPointCounter turn={turnColor}>
      <span className={`${turnColor === "black" ? "red" : ""}`}>black</span>:
      {blackCount} vs{" "}
      <span className={`${turnColor === "white" ? "red" : ""}`}>white</span>:{" "}
      {whiteCount}
    </StyledPointCounter>
  );
};

export default PointCounter;
