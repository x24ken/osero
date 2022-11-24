import { createContext, useContext, useReducer } from "react";

//こんな形で変化可能なものを配列として持っておく
const initalPossibleCells = [
  [
    [2, 4],
    [3, 4],
  ],
  [
    [3, 5],
    [3, 4],
  ],
  [
    [4, 2],
    [4, 3],
  ],
  [
    [5, 3],
    [4, 3],
  ],
];

const PossibleCellsContext = createContext();
const PossibleCellsDispatchContext = createContext();

const PossibleCellsReducer = (
  possibleCells,
  { type, newPossibleCells = "" }
) => {
  switch (type) {
    case "possibleCells/update":
      console.log("possibleCells/update");
      return newPossibleCells;
    case "possibleCells/reset":
      console.log("possibleCells/reset");
      return initalPossibleCells;
    // eslint-disable-next-line no-fallthrough
    default:
      throw Error("possibleCellsのところでエラーがでました");
  }
};

const PossibleCellsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    PossibleCellsReducer,
    initalPossibleCells
  );

  return (
    <PossibleCellsContext.Provider value={state}>
      <PossibleCellsDispatchContext.Provider value={dispatch}>
        {children}
      </PossibleCellsDispatchContext.Provider>
    </PossibleCellsContext.Provider>
  );
};

const usePossibleCells = () => useContext(PossibleCellsContext);
const usePossibleCellsDispatch = () => useContext(PossibleCellsDispatchContext);

export { PossibleCellsProvider, usePossibleCells, usePossibleCellsDispatch };
