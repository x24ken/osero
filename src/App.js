import "./App.css";
import Main from "./components/Main";
import { Provider } from "react-redux";
import store from "./store";
import Style from "./components/Style";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Style>
          <Main />
        </Style>
      </Provider>
    </div>
  );
}

export default App;
