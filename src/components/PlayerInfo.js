import { useSelector } from "react-redux";

const PlayerInfo = () => {
  const { userColor } = useSelector((state) => state.color);
  const { blackCount, whiteCount, nullCount } = useSelector(
    (state) => state.counter
  );

  let winMessage;
  if (blackCount > whiteCount) {
    winMessage = "blackの勝ち";
  } else if (blackCount < whiteCount) {
    winMessage = "whiteの勝ち";
  } else {
    winMessage = "引き分け";
  }

  return (
    <>
      <div>
        {nullCount === 0 || blackCount === 0 || whiteCount === 0 ? (
          <h2>{winMessage}</h2>
        ) : (
          userColor && `あなたは${userColor}です`
        )}
      </div>
    </>
  );
};

export default PlayerInfo;
