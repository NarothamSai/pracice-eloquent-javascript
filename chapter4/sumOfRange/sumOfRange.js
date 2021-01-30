function sum(arrNum) {
  let sumNum = 0;
  if (Array.isArray(arrNum)) {
    arrNum.forEach((elem) => (sumNum += elem));
  }
  return sumNum;
}

function range(start, end) {
  let rangeNum = [];
  for (let ctr = start; ctr <= end; ctr += 1) {
    rangeNum.push(ctr);
  }
  return rangeNum;
}

module.exports = { sum, range };
