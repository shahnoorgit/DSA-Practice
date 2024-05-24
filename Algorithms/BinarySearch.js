function binarySearch(target, array) {
  let lowerIndex = 0;
  let upperIndex = array.length - 1;

  while (lowerIndex <= upperIndex) {
    let midindex = Math.floor((lowerIndex + upperIndex) / 2);
    let midValue = array[midindex];
    if (target == midValue) {
      return midindex;
    } else if (target < midValue) {
      upperIndex = midindex - 1;
    } else if (target > midValue) {
      lowerIndex = midindex + 1;
    }
  }
  return -1;
}

//driver code
let target = 8;

let array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26,
];

const res = binarySearch(target, array);

console.log(res);
