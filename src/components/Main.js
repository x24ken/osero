import Game from "./Game";
import Start from "./Start";
import Reset from "./Reset";

import styled from "styled-components";
import Info from "./Info";
import PassButton from "./PassButton";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;
  gap: 10px;
  position: relative;
`;

const StyledMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 100px;
`;

const Main = () => {
  return (
    <StyledMain>
      <Info />
      <Game />
      <Start />
      <StyledMenu>
        <Reset />
        <PassButton />
      </StyledMenu>
    </StyledMain>
  );
};

export default Main;
