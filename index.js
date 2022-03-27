import _ from 'lodash';

console.log(Math.sqrt(256) + 100);

console.log(_.last([111, 222, 333]));

const findSum = (a, b) => {
  const c = a + b;
  return c;
};

const sum = findSum(12, 23);

console.log(sum);
