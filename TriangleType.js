const TriangleType = (a, b, c) => {
  if (a === b && b === c) return "equilateral";
  if (a !==b && b !== c && a !==c) return "scalene"

};

module.exports = TriangleType;