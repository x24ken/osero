import { createContext, useContext, useReducer } from "react";

const GameContext = createContext();
const GameDispatchContext = createContext();

const initiatGame = {
  process: false,
  user: null,
  cpu: null,
};

const reducer = (state, { type }) => {
  switch (type) {
    case "game/user/black":
      return {
        process: true,
        user: "black",
        cpu: "white",
      };
    case "game/user/white":
      return {
        process: true,
        user: "white",
        cpu: "black",
      };
    case "game/reset":
      return {
        process: false,
        user: null,
        cpu: null,
      };
    default:
      throw new Error("gameのところでエラーが起きています");
  }
};
// {user: "black",
// cpu: "white"}
// みたいな形で使う

const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initiatGame);
  return (
    <GameContext.Provider value={state}>
      <GameDispatchContext.Provider value={dispatch}>
        {children}
      </GameDispatchContext.Provider>
    </GameContext.Provider>
  );
};

const useGame = () => useContext(GameContext);
const useGameDispatch = () => useContext(GameDispatchContext);

export { GameProvider, useGame, useGameDispatch };
