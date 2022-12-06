import styled from "styled-components";

const StyledSpiner = styled.div`
  text-align: center;
  & div {
    display: inline-block;
    width: 18px;
    height: 18px;
    background-color: #ffffff;
    border-radius: 50%;
    animation: sk-bouncedelay 1.4s infinite;

    &:nth-child(1) {
      animation-delay: -0.32s;
    }

    &:nth-child(2) {
      animation-delay: -0.16s;
    }
  }

  @keyframes sk-bouncedelay {
    0% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
    80% {
      transform: scale(0);
    }
    100% {
      transform: scale(0);
    }
  }
`;

const Spiner = () => {
  return (
    <StyledSpiner>
      <div></div>
      <div></div>
      <div></div>
    </StyledSpiner>
  );
};

export default Spiner;
