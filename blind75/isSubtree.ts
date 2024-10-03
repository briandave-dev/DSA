import { TreeNode } from "../trees/tree";

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (!subRoot) return true;
    if (!root) return false;

    function isSame(a: TreeNode | null, b: TreeNode | null): boolean {
        if (!a && !b ) return true;

        if (a && b && a.val === b.val) {
            return isSame(a.left, b.left) && isSame(a.right, b.right);
        } 

        return false;
    }

    if (isSame(root, subRoot)) {
        return true;
    } else {
        return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
    }
};