import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  resetInfo,
  setCpuColor,
  setTurnColor,
  setUserColor,
} from "../store/modules/color";
import { useEffect } from "react";
import { useState } from "react";
import { othelloReset } from "../store/modules/othello";

const StyledStartButton = styled.button`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 20px;
  gap: 20px;
  position: relative;
  /* whizzy色 */
  background: rgba(94, 52, 102, 0.65);
  border-radius: 20px;
  font-weight: 400;
  font-size: 36px;
  color: #ffffff;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.3s;

  &:hover {
    opacity: ${(props) => (props.disabled ? 1 : 0.7)};
  }
`;

const Button = () => {
  // グローバルstate
  const dispatch = useDispatch();
  const { userColor, turnColor, cpuColor } = useSelector(
    (state) => state.color
  );
  const { possibleCells } = useSelector((state) => state.othello);
  const { blackCount, whiteCount, nullCount } = useSelector(
    (state) => state.counter
  );

  //Startクリックアクション
  const clickStart = () => {
    // 盤面をreset
    dispatch(othelloReset());
    dispatch(setTurnColor("black"));
    dispatch(resetInfo());
    // 0か1の値をランダムでとってきて、それで先手後手を決める
    const random = Math.floor(Math.random() * 2);
    if (random === 0) {
      dispatch(setUserColor("black"));
      dispatch(setCpuColor("white"));
    } else {
      dispatch(setUserColor("white"));
      dispatch(setCpuColor("black"));
    }
  };

  //Cancelクリックアクション
  const clickCancel = () => {};

  //Passクリックアクション
  const clickPass = () => {
    turnColor === "white" && dispatch(setTurnColor("black"));
    turnColor === "black" && dispatch(setTurnColor("white"));
  };

  // button初期値
  const [btnProps, setBtnProps] = useState({
    message: "CPU戦スタート",
    onClick: clickStart,
    disabled: false,
  });

  useEffect(() => {
    if (userColor === turnColor) {
      setBtnProps({
        message: "自分のターン",
        onClick: clickCancel,
        disabled: true,
      });
    }
    if (cpuColor === turnColor) {
      setBtnProps({
        message: "CPUのターン",
        onClick: clickCancel,
        disabled: true,
      });
    }
    if (possibleCells.length === 0 && userColor === turnColor) {
      setBtnProps({
        message: "パスしますか？",
        onClick: clickPass,
        disabled: false,
      });
    }

    if (nullCount === 0 || blackCount === 0 || whiteCount === 0) {
      setBtnProps({
        message: "もう一度戦う？",
        onClick: clickStart,
        disabled: false,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    blackCount,
    nullCount,
    possibleCells.legth,
    turnColor,
    userColor,
    whiteCount,
  ]);

  const { message, onClick, disabled } = btnProps;
  return (
    <StyledStartButton onClick={onClick} disabled={disabled}>
      {message}
    </StyledStartButton>
  );
};

export default Button;
