const infectedCell = {
  ticks: 0,
  injurence: 4,
  infected: true,
}

function range(n) {
  return Array.apply(null, Array(n)).map(function (_, i) {return i;});
}

function random(min, max, interval = 1) {
  const r = Math.floor(Math.random() * (max - min + interval) / interval);
  return r * interval + min;
}

function boolRandom() {
  return random(0, 1) === 1;
}

function generateDirectionVector() {
  return {
    i: random(-1, 1),
    j: random(-1, 1),
  };
}


function isDirectionVectorValid(n, i, j, vector) {
  let destI = i + vector.i;
  let destJ = j + vector.j;
  return (vector.i !== 0 || vector.j !== 0) && destI >= 0 && destI <= n - 1 && destJ >= 0 && destJ <= n - 1;
}

export function generateCells(n) {
  return range(n).map(i => {
    return range(n).map(j => {
      const infected = (Math.round(n / 2) - 1) === i &&  i === j;
      return {
        ...infectedCell,
        injurence: infected ? 4 : 0,
        canBeInfected: !infected,
        infected,
      };
    });
  });
}

export function gameStep(data) {
  const n = data.length;
  for (var i = 0; i < data.length; ++i) {
    for (var j = 0; j < data[i].length; ++j) {
      let cell = data[i][j];
      if (cell.infected) {
        if (boolRandom()) { // if will injure
          let directionVector = generateDirectionVector();
          while (!isDirectionVectorValid(n, i, j, directionVector)) {
            directionVector = generateDirectionVector();
            console.log('Direction vector is not valid, trying to generate new one more time.')
          }
          let target = data[i + directionVector.i][j + directionVector.j];
          if (target.ticks <= 6 && target.canBeInfected) {
            data[i + directionVector.i][j + directionVector.j] = {
              ...infectedCell
            }; 
          }
        }
        if (cell.ticks > 6) {
          cell.injurence--;
        }
        cell.ticks++;
        if (!cell.injurence) {
          cell.infected = false;
          cell.ticks = 0;
          cell.canBeInfected = random(1, 4) === 1;
        }
      }
    }
  }
  return data;
}
