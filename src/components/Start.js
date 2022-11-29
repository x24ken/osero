import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setCpuColor, setUserColor } from "../store/modules/color";

const StyledStartButton = styled.button`
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
  cursor: ${(props) => (props.userColor ? "not-allowed" : "pointer")};
`;

const Start = () => {
  const dispatch = useDispatch();
  const { userColor } = useSelector((state) => state.color);

  const clickHandler = () => {
    if (userColor) {
      return;
    }
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

  return (
    <StyledStartButton onClick={clickHandler} userColor={userColor}>{`${
      userColor ? "CPUと対戦中" : "CPU戦スタート"
    }`}</StyledStartButton>
  );
};

export default Start;
