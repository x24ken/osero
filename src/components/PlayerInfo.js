import { useGame } from "../context/GameContext";
import { usePossibleCells } from "../context/PossibleCellsContext";

const PlayerInfo = () => {
  const possibleCells = usePossibleCells();
  const game = useGame();
  console.log(game);
  return (
    <>
      <div>{possibleCells.length === 0 && "ゲーム終了です！"}</div>
      <div>{game.user && `あなたは${game.user}です`}</div>
    </>
  );
};

export default PlayerInfo;
