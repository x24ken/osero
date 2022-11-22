import { createContext, useContext, useState } from "react";

const TurnContext = createContext();
const SetTunrnContext = createContext();

const TurnProvider = ({ children }) => {
  const [turn, setTurn] = useState("black");

  return (
    <TurnContext.Provider value={turn}>
      <SetTunrnContext.Provider value={setTurn}>
        {children}
      </SetTunrnContext.Provider>
    </TurnContext.Provider>
  );
};

const useTurn = () => useContext(TurnContext);
const useSetTurn = () => useContext(SetTunrnContext);

export { TurnProvider, useTurn, useSetTurn };
