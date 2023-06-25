class Queue {
  constructor() {
    this.queue = [];
  }

  // Adds an element to the end of the queue
  enqueue(element) {
    this.queue.push(element);
  }

  // Removes and returns the first element from the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty.";
    }
    return this.queue.shift();
  }

  // Returns the first element of the queue without removing it
  peek() {
    if (this.isEmpty()) {
      return "Queue is empty.";
    }
    return this.queue[0];
  }

  // Returns true if the queue is empty, false otherwise
  isEmpty() {
    return this.queue.length === 0;
  }

  // Returns the number of elements in the queue
  size() {
    return this.queue.length;
  }

  // Clears the queue
  clear() {
    this.queue = [];
  }
}

// Usage example:
const queue = new Queue();
console.log(queue.isEmpty()); // Output: true

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.peek()); // Output: 1
console.log(queue.dequeue()); // Output: 1
console.log(queue.size()); // Output: 2

queue.clear();
console.log(queue.isEmpty()); // Output: true
