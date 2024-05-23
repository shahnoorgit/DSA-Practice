const array = [1, 2, 3, 4, 5, 6, 7, 8];

const BinarySearch = (array, x) => {
  const lowerIndex = 0;
  const upperIndex = array.length;
  const midIndex = lowerIndex + upperIndex / 2;
  for (let i = 0; i <= upperIndex; i++) {
    if (x == array[midIndex]) {
      return midIndex;
    } else if (x <= array[midIndex]) {
      midIndex = array;
    }
  }
};

BinarySearch(array);
