import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setTurnColor } from "../store/modules/color";

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
  const dispatch = useDispatch();
  const turnColor = useSelector((state) => state.color.turnColor);
  const clickHandler = () => {
    turnColor === "white" && dispatch(setTurnColor("black"));
    turnColor === "black" && dispatch(setTurnColor("white"));
  };
  return <StyledPassButton onClick={clickHandler}>パス</StyledPassButton>;
};

export default PassButton;
