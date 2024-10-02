export class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null){
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export function arrayToList(array: number[]): ListNode | null {
    if(array.length === 0) return null
    const head = new ListNode(array[0]);
    let current = head;

    for(let i = 1; i < array.length; i++){
        current.next = new ListNode(array[i]);
        current = current.next
    }

    return head;
}

export function printList(head: ListNode | null): void {
    let result: number[] = [];
    let current = head;

    while(current !== null){
        result.push(current.val);
        current = current.next
    }

    console.log(result)
}
