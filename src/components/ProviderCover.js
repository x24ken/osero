import { GameProvider } from "../context/GameContext";
import { OthelloProvider } from "../context/OthelloContext";
import { PossibleCellsProvider } from "../context/PossibleCellsContext";
import { TurnProvider } from "../context/TurnContext";

const ProviderCover = ({ children }) => {
  return (
    <GameProvider>
      <PossibleCellsProvider>
        <TurnProvider>
          <OthelloProvider>{children}</OthelloProvider>
        </TurnProvider>
      </PossibleCellsProvider>
    </GameProvider>
  );
};

export default ProviderCover;
