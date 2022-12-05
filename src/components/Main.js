import Game from "./Game";
import Othello from "./Othello";

import styled from "styled-components";
import Info from "./Info";
import Button from "./Button";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;
  gap: 10px;
  position: relative;
`;

const Main = () => {
  return (
    <Game>
      <StyledMain>
        <Info />
        <Othello />
        <Button />
      </StyledMain>
    </Game>
  );
};

export default Main;
