import { useGame } from "../context/GameContext";
import { usePossibleCells } from "../context/PossibleCellsContext";

const PlayerInfo = () => {
  const possibleCells = usePossibleCells();
  const game = useGame();
  return (
    <>
      <div>{possibleCells.length === 0 && "ゲーム終了です！"}</div>
      <div>{game.process && `あなたは${game.user}です`}</div>
    </>
  );
};

export default PlayerInfo;
