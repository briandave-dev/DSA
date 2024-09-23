//You can also do this with the push and shift in-built js methods

class Queue {
  constructor() {
    this.count = 0;
    this.storage = {};
    this.priority = [];
  }

  enqueue(value, priority) {
    for (let i = 0; i < this.count; i++) {
      if (priority >= this.priority[i]) {
        this.storage[this.count] = value;
        this.priority[this.count] = priority;
        this.count++;
        return
      }
    }
    this.storage[this.count] = value;
    this.priority[this.count] = priority;
    this.count++;
  }

  dequeue() {
    if (this.count === 0) return undefined;
    this.count--;
    let result = [this.storage[0], this.priority[0]];
    delete this.storage[0];
    delete this.priority;
    return result;
  }

  front() {
    return [this.storage[0], this.priority[0]];
  }

  size() {
    return this.count;
  }
}

var myQueue = new Queue();
myQueue.enqueue("value 0", 3);
myQueue.enqueue("value 1", 2);
myQueue.enqueue("value 2", 1);

console.log(myQueue.front());
console.log(myQueue.size());
console.log(myQueue);
