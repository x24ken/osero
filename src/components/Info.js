import styled from "styled-components";
import PlayerInfo from "./PlayerInfo";
import PointCounter from "./PointCounter";

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 100%;
`;

const Info = () => {
  return (
    <StyledInfo>
      <PointCounter />
      <PlayerInfo />
    </StyledInfo>
  );
};

export default Info;
