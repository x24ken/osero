import { useSetTurn } from "../context/TurnContext";
import { useGameDispatch } from "../context/GameContext";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { othelloReset } from "../store/modules/othelloReducer";

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
  const othelloDispatch = useDispatch();
  const setTurn = useSetTurn();
  const gameDispatch = useGameDispatch();

  const reset = () => {
    othelloDispatch(othelloReset());
    setTurn("black");
    gameDispatch({ type: "game/reset" });
  };
  return <StyledResetButton onClick={reset}>リセット</StyledResetButton>;
};
export default Reset;
