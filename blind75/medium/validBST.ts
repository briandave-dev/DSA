class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

function isValidBST(root: TreeNode | null): boolean {
    function validate(node: TreeNode | null, low: number | null, high: number | null): boolean {
        if (node === null) {
            return true;
        }
        
        if ((low !== null && node.val <= low) || (high !== null && node.val >= high)) {
            return false;
        }
        
        return validate(node.left, low, node.val) && validate(node.right, node.val, high);
    }
    
    return validate(root, null, null);
}

// Example usage:
const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));
console.log(isValidBST(root)); // Output: true
