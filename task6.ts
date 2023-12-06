type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
  let a = Promise.all([promise1,promise2])
    .then(res =>res
      .reduce(function (previousValue, currentValue, index, array) { 
    return previousValue + currentValue;}));
  return a;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

//Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.
