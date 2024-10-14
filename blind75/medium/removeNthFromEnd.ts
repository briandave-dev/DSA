import { ListNode } from "../../linkedLists/linkedList"

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const dummy = new ListNode(0, head);
    let first: ListNode | null = dummy;
    let second: ListNode | null = dummy;

    // Move first pointer n+1 steps ahead
    for (let i = 0; i <= n; i++) {
        first = first!.next; // Non-null assertion since we will be moving n+1 times
    }

    // Move first to the end, maintaining the gap
    while (first) {
        first = first.next;
        second = second!.next; // Move second pointer along
    }

    // Remove the nth node from the end
    second!.next = second!.next!.next;

    return dummy.next; // Return the modified list
}