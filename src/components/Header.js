import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 10px;
  gap: 10px;
  background-color: white;
`;

const Header = () => {
  return <StyledHeader>{/* <img src={pic} alt="logo" /> */}</StyledHeader>;
};

export default Header;
