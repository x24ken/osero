//ヘルパー関数・・・
const checkPossibleReturnOthelloArray = (othello, blackIsNext) => {
  const allOthelloArray = [];
  //全てのマスの可能性をさぐる
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      allOthelloArray.push(checkOthelloAround(othello, y, x, blackIsNext));
    }
  }
  // チェンジできる数が１以上あるものは変えれる
  return allOthelloArray.filter((array) => array.length > 1);
};

// そのマス目にひっくり返るものがあるか調べる。（ある場合は配列が返ってくる）
const checkOthelloAround = (othello, yIndex, xIndex, blackIsNext) => {
  //チェックする方向
  const directions = [
    [0, 1], // 右
    [0, -1], // 左
    [-1, 0], // 上
    [1, 0], // 下
    [-1, -1], // 左上
    [1, 1], // 左下
    [-1, 1], // 右上
    [1, -1], // 右下
  ];

  const change = [[yIndex, xIndex]];

  directions.forEach((direction) => {
    const result = crossCheck(
      othello,
      yIndex,
      xIndex,
      direction[0],
      direction[1],
      blackIsNext
    );
    change.push(...result);
  });
  return change;
};
// そのコマの方向にひっくり返るものがあるか調べる。（ある場合は配列が返ってくる。）
const crossCheck = (
  othello,
  yIndex,
  xIndex,
  yDirection,
  xDirection,
  blackIsNext
) => {
  const changeArray = [];

  // 壁側の判定はしない
  if (
    yIndex + yDirection > 7 ||
    yIndex + yDirection < 0 ||
    xIndex + xDirection > 7 ||
    xIndex + xDirection < 0
  ) {
    return changeArray;
  }

  //マスになにか入っているものは判定しない
  if (othello[yIndex][xIndex]) {
    return changeArray;
  }

  //右左上下ななめのオセロの状態
  const nextOthello = othello[yIndex + yDirection][xIndex + xDirection];
  // const targetColor = blackIsNext ? "white" : "black";
  const myColor = blackIsNext ? "black" : "white";

  //次がオセロではないときは終了
  if (!nextOthello) {
    return changeArray;
  }

  //次のオセロが自分の色と一緒の場合は終了
  if (nextOthello === myColor) {
    return changeArray;
  }

  //次のオセロが自分の色と一緒の場合は終了
  if (nextOthello === undefined || null) {
    return changeArray;
  }

  //更新していくようの値
  let _yDirection = yDirection;
  let _xDirection = xDirection;
  const total = [];

  // チェックする方向に自分の色でなければループで回す
  while (othello[yIndex + _yDirection][xIndex + _xDirection] !== myColor) {
    if (othello[yIndex + _yDirection][xIndex + _xDirection] === null) {
      total.splice(0);
      return total;
    }

    if (othello[yIndex + _yDirection][xIndex + _xDirection] === myColor) {
      total.splice(0);
      return total;
    }

    //置いた時に変える石
    total.push([yIndex + _yDirection, xIndex + _xDirection]);

    // チェックを終えたらy軸とx軸を更新する
    _yDirection += yDirection;
    _xDirection += xDirection;

    if (
      yIndex + _yDirection > 7 ||
      yIndex + _yDirection < 0 ||
      xIndex + _xDirection > 7 ||
      xIndex + _xDirection < 0
    ) {
      total.splice(0);
      return total;
    }
  }
  changeArray.push(...total);
  return changeArray;
};

// 配列をうけとってそれを代入する
const newOthello = (othello, array, value) => {
  return [
    ...othello,
    array.forEach((change) => {
      othello[change[0]][change[1]] = value;
    }),
  ];
};

export { checkPossibleReturnOthelloArray, newOthello };
