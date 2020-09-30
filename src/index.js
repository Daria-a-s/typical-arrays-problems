
exports.min = function min (array) {
  return arr.length === 0 || arr.filter(item => typeof item === "number").length != arr.length ? 0 : arr.sort((a, b) => a - b)[0];
}

exports.max = function max (array) {
  return arr.length === 0 || arr.filter(item => typeof item === "number").length != arr.length ? 0 : arr.sort((a, b) => a - b)[arr.length-1];
}

exports.avg = function avg (array) {
  return arr.length === 0 || arr.filter(item => typeof item === "number").length != arr.length ? 0 : arr.reduce((sum, curr) => sum + curr)/arr.length;
}
