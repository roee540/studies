const deepClone = (obj) => {
  if (typeof obj !== "object" || obj === null) return obj;

  const newObj = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    const value = obj[key];

    newObj[key] = deepClone(value);
  }
  return newObj;
};

const xArray = [1, 2, 3, 4, 5, [6, 7, 8]];
const yArray = deepClone(xArray);
xArray[5].push(9);

console.log(xArray);
console.log(yArray);

const obj1 = {
  a: 1,
  b: "b",
  c: () => {
    console.log("Hello world!");
  },
  d: { one: "one", two: 2 },
};
const obj2 = deepClone(obj1);
obj1.d.two = 10;

console.log(obj1);
console.log(obj2);
