import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import ProviderCover from "./components/ProviderCover";
import styled from "styled-components";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

function App() {
  return (
    <div className="App">
      <StyledApp>
        <ProviderCover>
          <Header />
          <Main />
          <Footer />
        </ProviderCover>
      </StyledApp>
    </div>
  );
}

export default App;
