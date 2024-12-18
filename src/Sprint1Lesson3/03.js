console.log("=========reduce method===========");
function itReduce(array, callBack, acc) {
  for (let i = 0; i < array.length; i++) {
    acc = callBack(acc, array[i], i, array);
  }
  return acc;
}
const a = [1, 2, 3, 4, 5];
console.log("array before method", a);
console.log(
  "return of method",
  itReduce(a, (acc, el) => acc + el, 0)
);
console.log("array after method", a);

console.log("=========true reduce method===========");
// eslint-disable-next-line no-extend-native
Array.prototype.myReduce = function itReduce(callBack, acc) {
  for (let i = 0; i < this.length; i++) {
    acc = callBack(acc, this[i], i, this);
  }
  return acc;
};
console.log("array before true method", a);
console.log(
  "return of true method",
  a.myReduce((acc, el) => acc + el, 0)
);
console.log("array after method", a);

console.log("=========find method===========");
function itFind(array, callBack) {
  let result = undefined;
  for (let i = 0; i < array.length; i++) {
    if (callBack(array[i]) === true) {
      result = array[i];
      break;
    }
  }
  return result;
}

const checkDivideToThree = (el) => !(el % 3);

const numbers = [1, 2, 9, 3, 4, 5];
console.log("array before method", a);
console.log("return of method", itFind(numbers, checkDivideToThree));
console.log("array after method", a);

console.log("=========filter method===========");
function itFilter(array, callBack) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callBack(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(
  "return of filter method",
  itFilter(numbers, (el) => !(el % 2))
);

console.log("=========filter method===========");
function itMap(array, callBack) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const newElement = callBack(array[i]);
    result.push(newElement);
  }
  return result;
}

console.log(
  "return of map method",
  itMap(numbers, el => Math.sqrt(el))
);

console.log("=========slice method===========");
function itSlice(array, startIndex = 0, endIndex = array.length) {
  const start = startIndex >= 0 ? startIndex : array.length;
  const end = endIndex < 0 ? array.length + endIndex : endIndex;
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(array[i]);
  }
  return result;
}

console.log(
  "return of slice method",
  itSlice(numbers, -2, -4)
);

console.log(numbers.slice(-2, -4));
