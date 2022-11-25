import { useOthelloDispatch } from "../context/OthelloContext";
import { useSetTurn } from "../context/TurnContext";
import { useGameDispatch } from "../context/GameContext";
import styled from "styled-components";

const StyledResetButton = styled.button`
  /* オートレイアウト */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  background: #10492e;
  border-radius: 15px;
  font-style: normal;
  font-weight: 400;
  color: #ffffff;
  cursor: pointer;
`;

const Reset = () => {
  const othelloDispatch = useOthelloDispatch();
  const setTurn = useSetTurn();
  const gameDispatch = useGameDispatch();

  const reset = () => {
    othelloDispatch({ type: "othello/reset" });
    setTurn("black");
    gameDispatch({ type: "game/reset" });
  };
  return <StyledResetButton onClick={reset}>リセット</StyledResetButton>;
};
export default Reset;
