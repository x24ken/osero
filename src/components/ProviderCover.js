import { OthelloProvider } from "../context/OthelloContext";
import { PossibleCellsProvider } from "../context/PossibleCellsContext";
import { TurnProvider } from "../context/TurnContext";
import Game from "./Game";

const ProviderCover = () => {
  return (
    <PossibleCellsProvider>
      <TurnProvider>
        <OthelloProvider>
          <Game />
        </OthelloProvider>
      </TurnProvider>
    </PossibleCellsProvider>
  );
};

export default ProviderCover;
