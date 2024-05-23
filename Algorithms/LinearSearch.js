const list = [1, 2, 5, 88, 99, 500, 1000, 0, 112, 65];
let x = 65;

function search(x) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] == x) {
      return { index: i };
    }
  }
  return -1;
}

console.log(search(x));
