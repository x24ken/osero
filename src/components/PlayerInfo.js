import { useSelector } from "react-redux";

const PlayerInfo = () => {
  const { userColor } = useSelector((state) => state.color);
  const { blackCount, whiteCount, nullCount } = useSelector(
    (state) => state.counter
  );

  return (
    <>
      <div>
        {nullCount === 0 || blackCount === 0 || whiteCount === 0
          ? "終わりです！"
          : userColor && `あなたは${userColor}です`}
      </div>
    </>
  );
};

export default PlayerInfo;
