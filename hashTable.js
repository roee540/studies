const hash = (key, tableSize) => {
  let hashedKey = 0;
  for (let i = 0; i < key.length; i++) {
    hashedKey += key.charCodeAt(i);
  }

  return hashedKey % tableSize;
};

class HashTable {
  constructor() {
    this.size = 24;
    this.table = Array(this.size);
  }

  get(key) {
    const idx = hash(key, this.size);

    for (let i = 0; i < this.table[idx]?.length; i++) {
      if (this.table[idx][i][0] === key) {
        return this.table[idx][i][1];
      }
    }
    return undefined;
  }

  set(key, val) {
    const idx = hash(key, this.size);
    if (!this.table[idx]) {
      this.table[idx] = [[key, val]];
    } else {
      let inserted = false;
      for (let i = 0; i < this.table[idx].length; i++) {
        if (this.table[idx][i][0] === key) {
          this.table[idx][i][1] = val;
          inserted = true;
        }
      }
      if (!inserted) this.table[idx].push([key, val]);
    }
  }

  remove(key) {
    const idx = hash(key, this.size);
    for (let i = 0; i < this.table[idx].length; i++) {
      if (this.table[idx][i][0] === key) {
        return this.table[idx].splice(i, 1);
      }
    }
  }

  print() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        for (let j = 0; j < this.table[i].length; j++) {
          console.log(`${this.table[i][j][0]} ---- ${this.table[i][j][1]}`);
        }
      }
    }
  }
}

const t1 = new HashTable();
t1.set("name", "roee");
t1.set("age", 32);
t1.set("height", 184);
console.log(t1.get("name"));
t1.print();
t1.remove("name");
t1.print();
