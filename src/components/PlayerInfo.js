import { useSelector } from "react-redux";

const PlayerInfo = () => {
  const { userColor } = useSelector((state) => state.info);
  const { board } = useSelector((state) => state.othello);
  // このboardにnullがないならゲームセット判定を起きたい
  let nullCount = 0;
  board.forEach((row) =>
    row.forEach((value) => {
      if (value === null) {
        nullCount += 1;
      }
    })
  );

  return (
    <>
      <div>
        {nullCount === 0
          ? "終わりです！"
          : userColor && `あなたは${userColor}です`}
      </div>
    </>
  );
};

export default PlayerInfo;
