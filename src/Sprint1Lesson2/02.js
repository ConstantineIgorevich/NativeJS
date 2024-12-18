(() => {
  console.log("=========push method===========");
  function itPush(array, ...params) {
    for (let i = 0; i < params.length; i++) {
      const lastIndex = array.length;
      array[lastIndex] = params[i];
    }
    return array.length;
  }
  const a = [1, 2, 3, 4, 5];
  console.log("array before method", a);
  console.log("return of method", itPush(a, 55, 66));
  console.log("array after method", a);
})();
// -------------------------------------------------------------
(() => {
  console.log("============pop method============");
  function itPop(array) {
    if (!array.length) {
      return undefined;
    }
    const result = array[array.length - 1];
    array.length -= 1;
    return result;
  }
  const a = [1, 2, 3, 4, 5];
  console.log("array before method", a);
  console.log("return of method", itPop(a));
  console.log("array after method", a);
})();
// -------------------------------------------------------------
(() => {
    console.log("============shift method=============");
    function itShift(array) {
      if (!array.length) {
        return undefined;
      }
      const result = array[0];
      for (let i = 0; i < array.length - 1; i++) {
        array[i] = array[i + 1];
      }
      array.length -= 1;
      return result;
    }
    const a = [1, 2, 3, 4, 5];
    console.log("array before method", a);
    console.log("return of method", itShift(a));
    console.log("array after method", a);
  })();
  // -------------------------------------------------------------
  (() => {
    console.log("============unshift method=============");
    function itUnshift(array, ...params) {
      for (let i = array.length - 1; i >= 0; i--) {
        array[i + params.length] =  array[i];
        if(i < params.length) {
            array[i] = params[i];
        }
      }
      return array.length;
    }
    const a = [1, 2, 3, 4, 5];
    console.log("array before method", a);
    console.log("return of method", itUnshift(a, 6, 7, 9));
    console.log("array after method", a);
  })();
(() => {})();
(() => {})();
(() => {})();
(() => {})();
(() => {})();
(() => {})();
(() => {
  function myItReverse(array) {
    for (let i = 0, j = array.length - 1; i < j; i++, j--) {
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  const a = [1, 2, 3, 4, 5];
  const b = [1, 2, 3, 4];
  console.log(myItReverse(a));
  console.log(a);
  console.log(myItReverse(b));
  console.log(b);
})();
(() => {})();
(() => {})();
