function knightMoves(start, end) {
  const possibleMoves = [
    [+2, +1],
    [+1, +2],
    [+2, -1],
    [-1, +2],
    [-2, +1],
    [+1, -2],
    [-2, -1],
    [-1, -2],
  ];
  const isValid = (x, y) => x >= 0 && x < 8 && y >= 0 && y < 8;
  let queue = [[start, 0, [start]]];
  let visited = new Set();
  visited.add(start.toString());
  while (queue.length > 0) {
    const [[x, y], moves, paths] = queue.shift();
    if (end[0] == x && end[1] == y) {
      console.log(`your path can be reached in ${moves} moves:`);
      for (step of paths) {
        console.log(step);
      }
      return;
    }
    for (const [dx, dy] of possibleMoves) {
      const [nx, ny] = [x + dx, y + dy];
      if (!visited.has([nx, ny].toString()) && isValid(nx, ny)) {
        visited.add([nx, ny].toString());

        queue.push([[nx, ny], moves + 1, [...paths, [nx, ny]]]);
      }
    }
  }
}
knightMoves([0, 0], [1, 2]);
