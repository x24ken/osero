//crossCheck.js
export const crossCheck = (othello, currentPosition, yAxis, xAxis, player) => {
  const change = [];

  // 石を置いた箇所からチェックを進めていく時にboardの端までチェックし終えたらチェックする処理を終了する
  if (
    currentPosition.yIndex + yAxis > 5 ||
    currentPosition.yIndex + yAxis < 0 ||
    currentPosition.xIndex + xAxis > 5 ||
    currentPosition.xIndex + xAxis < 0
  ) {
    return change;
  }

  // 石が次に進んでいく方向
  const nextPosition =
    othello[currentPosition.yIndex + yAxis][currentPosition.xIndex + xAxis];

  // 石が次に進んでいく方向 にマスがない場合か、石が置いてある場合はチェックを終了する
  if (
    !nextPosition ||
    othello[currentPosition.yIndex][currentPosition.xIndex]
  ) {
    return change;
  }

  // 石が次に進んでいく方向を最初は1つ隣、次のチェックで2つ隣となるので何個先をチェックするのか更新していく
  let _yAxis = yAxis;
  let _xAxis = xAxis;
  const total = [];

  // チェックする方向に置いた石と違う石があれば繰り返し処理をする
  while (
    othello[currentPosition.yIndex + _yAxis][
      currentPosition.xIndex + _xAxis
    ] !== player
  ) {
    // チェックする方向に石があるか、何も置いてない場合は石が置けないのでチェックを終了する
    if (
      othello[currentPosition.yIndex + _yAxis][
        currentPosition.xIndex + _xAxis
      ] === player ||
      othello[currentPosition.yIndex + _yAxis][
        currentPosition.xIndex + _xAxis
      ] == null
    ) {
      total.splice(0);
      return total;
    }

    // // 置いた時に返る石を追加
    total.push([
      currentPosition.yIndex + _yAxis,
      currentPosition.xIndex + _xAxis,
    ]);

    // チェックを終えたらy軸とx軸を更新する
    _yAxis += yAxis;
    _xAxis += xAxis;

    // 石を置いた箇所からチェックを進めていく時にboardの端までチェックし終えたらチェックする処理を終了する
    if (
      othello.length <= currentPosition.yIndex + _yAxis ||
      currentPosition.yIndex + _yAxis < 0 ||
      othello.length <= currentPosition.xIndex + _xAxis
    ) {
      total.splice(0);
      return total;
    }
  }
  // 選択した箇所で相手の返る位置をchangeにpushする
  change.push(...total);
  return change;
};
