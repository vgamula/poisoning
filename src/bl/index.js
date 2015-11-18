function range(n) {
  return Array.apply(null, Array(n)).map(function (_, i) {return i;});
}

export function generateCells(n) {
  return range(n).map(i => {
    return range(n).map(j => {
      const infected = (Math.round(n / 2) - 1) === i &&  i === j;
      return {
        ticks: 0,
        infected,
        injurence: infected ? 1 : 0,
      };
    });
  });
}
