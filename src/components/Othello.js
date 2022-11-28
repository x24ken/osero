import { useEffect } from "react";
import styled from "styled-components";
import { checkPossibleReturnOthelloArray } from "../helpers/OthelloHelper";
import { usePossibleCellsDispatch } from "../context/PossibleCellsContext";
import Board from "./Board";
import { useTurn } from "../context/TurnContext";
import { useSelector } from "react-redux";
import Reset from "./Reset";
import { useGame } from "../context/GameContext";

const StyledBoard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
`;

const Othello = () => {
  const othello = useSelector((state) => state.othello);
  const turn = useTurn();
  const game = useGame();

  const possibleCellsDispatch = usePossibleCellsDispatch();

  // PossibleCellsの配列を更新する（赤いところ)
  useEffect(() => {
    const newPossibleCells = checkPossibleReturnOthelloArray(
      othello,
      turn === "black"
    );
    possibleCellsDispatch({ type: "possibleCells/update", newPossibleCells });
  }, [othello, game, turn, possibleCellsDispatch]);

  return (
    <StyledBoard>
      <Board />
    </StyledBoard>
  );
};

export default Othello;
