import { useEffect } from "react";
import styled from "styled-components";
import { useOthello } from "../context/OthelloContext";
import { checkPossibleReturnOthelloArray } from "../helpers/OthelloHelper";
import { usePossibleCellsDispatch } from "../context/PossibleCellsContext";
import Board from "./Board";
import { useTurn } from "../context/TurnContext";
const StyledBoard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
`;

const Othello = () => {
  const othello = useOthello();
  const turn = useTurn();

  const possibleCellsDispatch = usePossibleCellsDispatch();

  // PossibleCellsの配列を更新する（赤いところ)
  useEffect(() => {
    const newPossibleCells = checkPossibleReturnOthelloArray(
      othello,
      turn === "black"
    );
    possibleCellsDispatch({ type: "possibleCells/update", newPossibleCells });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [othello]);

  return (
    <StyledBoard>
      <Board />
    </StyledBoard>
  );
};

export default Othello;
