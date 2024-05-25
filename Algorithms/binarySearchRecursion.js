function bin(array, start, target, end) {
  if (start > end) {
    return -1; // Base case: target not found
  }

  let midI = Math.floor((start + end) / 2);

  if (target == array[midI]) {
    return midI;
  } else if (target < array[midI]) {
    return bin(array, start, target, midI - 1);
  } else if (target > array[midI]) {
    return bin(array, midI + 1, target, end);
  }
  return -1;
}

// driver code
const array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27,
];
let end = array.length - 1;
let target = 2;
let start = 0;

const res = bin(array, start, target, end);
console.log(res);
