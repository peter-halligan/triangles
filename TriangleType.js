const TriangleType = (a, b, c) => {
  //todo: check for valid types

  return new Promise((resolve, reject) =>{
    if (!a || !b || !c) return reject("not_enough_arguments");
    if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") return reject("arg_is_not_a_number");
    if (a === b && b === c) return resolve("equilateral");
    if (a !== b && b !== c && a !==c) return resolve("scalene");
    //could leave this as an else
    if ((a === b && b !== c) || (a === c && a !== b) || a !== b && b === c) return resolve("isosceles");

  });


};

module.exports = TriangleType;