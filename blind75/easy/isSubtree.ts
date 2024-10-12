import { TreeNode } from "../../trees/tree"

function isSubtree(root: TreeNode | null, subroot: TreeNode | null): boolean {
    if(!subroot) return true;
    if(!root) return false;

    function isSame(a: TreeNode | null, b: TreeNode | null): boolean {
        if(!a && !b) return true;

        if(a && b && a.val === b.val){
            return isSame(a.left, b.left) && isSame(a.right, b.right);
        }

        return false;
    }

    if(isSame(root, subroot)){
        return false
    } else {
        return isSubtree(root.left, subroot) || isSubtree(root.right, subroot);
    }

    return false;
}