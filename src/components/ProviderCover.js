import { GameProvider } from "../context/GameContext";
import { PossibleCellsProvider } from "../context/PossibleCellsContext";
import { TurnProvider } from "../context/TurnContext";

const ProviderCover = ({ children }) => {
  return (
    <GameProvider>
      <PossibleCellsProvider>
        <TurnProvider>{children}</TurnProvider>
      </PossibleCellsProvider>
    </GameProvider>
  );
};

export default ProviderCover;
