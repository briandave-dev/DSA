class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

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
  
  