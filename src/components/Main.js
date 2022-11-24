import Game from "./Game";
import Start from "./Start";
import Reset from "./Reset";

import styled from "styled-components";
import Info from "./Info";

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
    <StyledMain>
      <Info />
      <Game />
      <Start />
      <Reset />
    </StyledMain>
  );
};

export default Main;
