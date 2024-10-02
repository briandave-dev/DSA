import { ListNode } from "../linkedLists/linkedList";
import { printList } from "../linkedLists/linkedList";
import { arrayToList } from "../linkedLists/linkedList";

function reverseList(head: ListNode | null): ListNode | null{
    let current: ListNode | null = head;
    let prev: ListNode | null = null

    while(current !== null){
        let nextNode: ListNode | null = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }

    return prev;
}

let list = arrayToList([1,2,3,4,5]);
let reversedList: ListNode | null = reverseList(list);

printList(reversedList)