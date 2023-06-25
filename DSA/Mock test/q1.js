class Stack {
  constructor() {
    this.stack = [];
  }

  // Pushes an element onto the stack
  push(element) {
    this.stack.push(element);
  }

  // Removes and returns the top element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty.";
    }
    return this.stack.pop();
  }

  // Returns the top element of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty.";
    }
    return this.stack[this.stack.length - 1];
  }

  // Returns true if the stack is empty, false otherwise
  isEmpty() {
    return this.stack.length === 0;
  }

  // Returns the number of elements in the stack
  size() {
    return this.stack.length;
  }

  // Clears the stack
  clear() {
    this.stack = [];
  }
}

// Usage example:
const stack = new Stack();
console.log(stack.isEmpty()); // Output: true

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek()); // Output: 3
console.log(stack.pop()); // Output: 3
console.log(stack.size()); // Output: 2

stack.clear();
console.log(stack.isEmpty()); // Output: true
