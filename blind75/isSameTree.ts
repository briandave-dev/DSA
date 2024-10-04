import { TreeNode } from "../trees/tree";

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if(!p && !q) return true;
    if(!p || !q) return false;

    if(p.val === q.val) {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    } else {
        return false;
    }
};