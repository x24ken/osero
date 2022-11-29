import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import styled from "styled-components";
import { Provider } from "react-redux";
import store from "./store";

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
        <Provider store={store}>
          <Header />
          <Main />
          <Footer />
        </Provider>
      </StyledApp>
    </div>
  );
}

export default App;
