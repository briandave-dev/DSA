import { ListNode } from "../linkedLists/linkedList";

function hasCycle(head: ListNode | null): boolean {
    if (head === null || head.next === null) return false;
  
    let slow: ListNode | null = head;
    let fast: ListNode | null = head.next; // Start fast 1 step ahead
  
    while (fast !== null && fast.next !== null) {
      if (slow === fast) return true; // Cycle detected
  
      slow = slow!.next;         // Move slow 1 step
      fast = fast.next.next;    // Move fast 2 steps
    }
  
    return false;  // No cycle detected
}

// Create linked list: 1 -> 2 -> 3 -> 2 (cycle)
let node3 = new ListNode(3);
let node2 = new ListNode(2, node3);
let head = new ListNode(1, node2);

// Create a cycle by making node3's next point to node2
node3.next = node2;

// Call the hasCycle function and print the result
console.log(hasCycle(head)); // Expected output: true
