import styled from "styled-components";
import { useDispatch } from "react-redux";
import { othelloReset } from "../store/modules/othello";
import { resetInfo, setTurnColor } from "../store/modules/info";

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
  const dispatch = useDispatch();

  const reset = () => {
    dispatch(othelloReset());
    dispatch(setTurnColor("black"));
    dispatch(resetInfo());
  };
  return <StyledResetButton onClick={reset}>リセット</StyledResetButton>;
};
export default Reset;
