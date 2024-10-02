import { arrayToList } from "../linkedLists/linkedList";
import { printList } from "../linkedLists/linkedList";

// Definition for singly-linked list.
export class ListNode { // Renamed to avoid conflicts
    val: number;
    next: ListNode | null;
    
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

// Function to merge two sorted linked lists
function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (l1 === null) {
        return l2;
    }
    if (l2 === null) {
        return l1;
    }

    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}

// Example usage:

// Create two sorted lists
const l1 = arrayToList([1, 3, 5]);
const l2 = arrayToList([2, 4, 6]);

// Merge the lists
const mergedList = mergeTwoLists(l1, l2);

// Print the merged list
printList(mergedList);
