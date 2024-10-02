export class ListNode {
    val: number;
    next: ListNode | null;
  
    constructor(val?: number, next?: ListNode | null) {
      this.val = (val === undefined ? 0 : val);
      this.next = (next === undefined ? null : next);
    }
}

// Helper function to create a linked list from an array
export function arrayToList(arr: number[]): ListNode | null {
    if (arr.length === 0) return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to print the linked list values
export function printList(head: ListNode | null): void {
    let current = head;
    const result: number[] = [];
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result);
}