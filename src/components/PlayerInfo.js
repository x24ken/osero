import { useSelector } from "react-redux";

const PlayerInfo = () => {
  const { userColor } = useSelector((state) => state.info);
  const possibleCells = useSelector((state) => {
    return state.possibleCells;
  });
  return (
    <>
      <div>{possibleCells.length === 0 && "ゲーム終了です！"}</div>
      <div>{userColor && `あなたは${userColor}です`}</div>
    </>
  );
};

export default PlayerInfo;
