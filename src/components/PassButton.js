import { useSetTurn } from "../context/TurnContext";
import styled from "styled-components";

const StyledPassButton = styled.button`
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

const PassButton = () => {
  const setTurn = useSetTurn();
  const clickHandler = () => {
    setTurn((prev) => (prev === "black" ? "white" : "black"));
  };
  return <StyledPassButton onClick={clickHandler}>パス</StyledPassButton>;
};

export default PassButton;
