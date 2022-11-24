import styled from "styled-components";
import { useGame, useGameDispatch } from "../context/GameContext";

const StyledStartButton = styled.button`
  /* オートレイアウト */

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

  cursor: ${(props) => (props.game.user ? "not-allowed" : "pointer")};
`;

const Start = () => {
  const gameDispatch = useGameDispatch();
  const game = useGame();

  const clickHandler = () => {
    if (game.user) {
      return;
    }
    const random = Math.floor(Math.random() * 2);
    console.log(random);

    if (random === 0) {
      gameDispatch({ type: "game/user/black" });
    } else {
      gameDispatch({ type: "game/user/white" });
    }
  };

  return (
    <StyledStartButton onClick={clickHandler} game={game}>{`${
      game.user ? "CPUと対戦中" : "CPU戦スタート"
    }`}</StyledStartButton>
  );
};

export default Start;
