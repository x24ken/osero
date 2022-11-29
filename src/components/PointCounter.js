import styled from "styled-components";
import { useSelector } from "react-redux";

const StyledPointCounter = styled.div`
  font-size: 24px;
  font-weight: 800;
  span.red {
    color: red;
  }
`;

const PointCounter = () => {
  const { turnColor } = useSelector((state) => state.color);
  const { blackCount, whiteCount } = useSelector((state) => state.counter);

  return (
    <StyledPointCounter turn={turnColor}>
      <span className={`${turnColor === "black" ? "red" : ""}`}>black</span>:
      {blackCount} vs{" "}
      <span className={`${turnColor === "white" ? "red" : ""}`}>white</span>:{" "}
      {whiteCount}
    </StyledPointCounter>
  );
};

export default PointCounter;
