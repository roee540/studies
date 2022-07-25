const proto = {
  [Symbol.iterator]: function values() {
    let _id = -1;
    return {
      next: () => {
        _id++;
        if (_id < Object.keys(this).length) {
          return {
            value: this[Object.keys(this)[_id]],
            done: false,
          };
        } else {
          return {
            value: undefined,
            done: true,
          };
        }
      },
    };
  },
};

const obj = Object.create(proto);
Object.assign(obj, {
  name: "Daniel Larusso",
  age: 42,
  job: "Karate",
  address: "LA",
});

console.log([...obj]);

for (let prop of obj) {
  console.log(prop);
}
