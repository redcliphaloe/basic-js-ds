const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  #HEAD;
  #TAIL;

  getUnderlyingList() {
    return this.#HEAD;
  }

  enqueue(value) {
    const TAIL = new ListNode(value);
    if (!this.#HEAD) {
      this.#TAIL = TAIL
      this.#HEAD = this.#TAIL;
    }    
    this.#TAIL.next = TAIL;
    this.#TAIL = this.#TAIL.next;
    return this;
  }

  dequeue() {
    const HEAD = this.#HEAD;
    this.#HEAD = this.#HEAD.next;
    return HEAD.value;
  }
}

module.exports = {
  Queue
};
