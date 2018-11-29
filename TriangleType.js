const TriangleType = (sideA, sideB, sideC) => new Promise((resolve, reject) => {
  if (!sideA || !sideB || !sideC) return reject(new Error('not_enough_arguments'));
  const a = parseFloat(sideA);
  const b = parseFloat(sideB);
  const c = parseFloat(sideC);
  if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c) || a === 0 || b === 0 || c === 0) return reject(new Error('invalid_arguments'));

  if (a === b && b === c) return resolve('equilateral');
  if (a !== b && b !== c && a !== c) return resolve('scalene');
  // could leave this as an else
  // if ((a === b && b !== c) || (a === c && a !== b) || a !== b && b === c)
  return resolve('isosceles');
});
module.exports = TriangleType;
