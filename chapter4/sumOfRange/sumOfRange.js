function sum(arr_num) {
  let sum_num = 0;
  if (Array.isArray(arr_num)) {
    arr_num.forEach((elem) => (sum_num += elem));
  }
  return sum_num;
}

function range(start, end) {
  let range_num = [];
  for (let ctr = start; ctr <= end; ctr += 1) {
    range_num.push(ctr);
  }
  console.log(range_num);
  return range_num;
}

module.exports = { sum, range };
