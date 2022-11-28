import styled from "styled-components";
import ReactDOM from "react-dom";

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledModalMessageCover = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;
  position: absolute;
  top: 30%;
  background: radial-gradient(
    50% 50% at 50% 50%,
    #ffe600 0%,
    rgba(91, 87, 49, 0) 100%
  );
`;

const StyledModalMessage = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 72px;
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const ModalMessage = ({ setShow }) => {
  const message = "You Win";

  const closeModal = () => {
    setShow(false);
  };
  return ReactDOM.createPortal(
    <StyledOverlay onClick={closeModal}>
      <StyledModalMessageCover>
        <StyledModalMessage>{message}</StyledModalMessage>
      </StyledModalMessageCover>
    </StyledOverlay>,
    document.getElementById("portal")
  );
};

export default ModalMessage;
