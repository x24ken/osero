import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
const StyledStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

const Style = ({ children }) => {
  return (
    <StyledStyle>
      <Header />
      {children}
      <Footer />
    </StyledStyle>
  );
};

export default Style;
