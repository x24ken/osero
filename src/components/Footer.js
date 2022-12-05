import styled from "styled-components";

const StyledFooter = styled.footer`
  /* オートレイアウト */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: #cec0c0;
`;

const Footer = () => {
  return <StyledFooter> &copy; nishida</StyledFooter>;
};

export default Footer;
