class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertFirst(value) {
    const node = new Node(value, this.head);
    this.head = node;
    this.size++;
  }

  removeFirst() {
    this.head = this.head.next;
    this.size--;
  }

  insertLast(value) {
    let node = new Node(value);
    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  getByIndex(index) {
    if (index < 0 || index > this.size) return null;

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }

  insertAtIndex(index, value) {
    if (index === 0) return this.insertFirst(value);

    const prev = this.getByIndex(index - 1);
    if (prev == null) return null;

    prev.next = new Node(value, prev.next);

    this.size++;
  }

  removeAtIndex(index) {
    if (index === 0) return this.removeFirst();

    const prev = this.getByIndex(index - 1);
    if (prev == null) return null;

    prev.next = prev.next.next;
    this.size--;
  }

  print() {
    let output = "";
    let current = this.head;

    while (current) {
      output = `${output}${current.value} -> `;
      current = current.next;
    }

    console.log(`${output}${current}`);
  }
}

const li = new LinkedList();
li.insertFirst(10);
li.insertLast(20);
li.insertLast(30);
li.insertLast(40);
li.insertLast(50);
li.insertAtIndex(1, 100);
li.insertAtIndex(3, 200);
li.print();
li.removeAtIndex(4);
li.print();
console.log(li.size);
