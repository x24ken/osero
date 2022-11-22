import { createContext, useContext, useReducer } from "react";
const OthelloContext = createContext();
const OthelloContextDispatch = createContext();

const initialOthello = [
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, "black", "white", null, null, null],
  [null, null, null, "white", "black", null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
];

const othelloReducer = (othello, { type, cell }) => {
  const [yIndex, xIndex] = cell;
  switch (type) {
    case "othello/update/black":
      console.log("othello/update/black");
      return [...othello, (othello[yIndex][xIndex] = "black")];
    case "othello/update/white":
      console.log("othello/update/white");
      return [...othello, (othello[yIndex][xIndex] = "white")];
    default:
      throw Error("そんなアクションはありません。");
  }
};

const OthelloProvider = ({ children }) => {
  const [othello, dispatch] = useReducer(othelloReducer, initialOthello);

  return (
    <OthelloContext.Provider value={othello}>
      <OthelloContextDispatch.Provider value={dispatch}>
        {children}
      </OthelloContextDispatch.Provider>
    </OthelloContext.Provider>
  );
};

const useOthello = () => useContext(OthelloContext);
const useOthelloDispatch = () => useContext(OthelloContextDispatch);

export { useOthello, useOthelloDispatch, OthelloProvider };
