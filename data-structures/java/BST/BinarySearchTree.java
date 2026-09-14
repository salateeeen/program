
public class BinarySearchTree<E extends Comparable<E>> {

    private class Node {

        E data;
        Node left;
        Node right;

        public Node(E data) {
            this.data = data;
            this.left = null;
            this.right = null;
        }
    }

    private Node root;

    public BinarySearchTree() {
        this.root = null;
    }

    public void insert(E data) {
        root = insertRec(root, data);
    }

    private Node insertRec(Node root, E data) {
        if (root == null) {
            return new Node(data);
        }

        if (data.compareTo(root.data) < 0) {
            root.left = insertRec(root.left, data);
        } else if (data.compareTo(root.data) > 0) {
            root.right = insertRec(root.right, data);
        }

        return root;
    }

    public boolean contains(Node root, E data) {
        if (root == null) {
            return false;
        }
        if (data.compareTo(root.data) == 0) {
            return true;
        }
        return data.compareTo(root.data) < 0 ? contains(root.left, data) : contains(root.right, data);
    }

    public void preOrderTraversal() {
        System.out.print("PreOrder Traversal: ");
        preOrderTraversal(root);
        System.out.println();
    }

    private void preOrderTraversal(Node root) {
        if (root != null) {
            System.out.print(root.data + " ");
            preOrderTraversal(root.left);
            preOrderTraversal(root.right);
        }
    }

    public void inorderTraversal() {
        System.out.print("Inorder Traversal: ");
        inorderTraversal(root);
        System.out.println();
    }

    private void inorderTraversal(Node root) {
        if (root != null) {
            inorderTraversal(root.left);
            System.out.print(root.data + " ");
            inorderTraversal(root.right);
        }
    }

    public void postOrderTraversal() {
        System.out.print("PostOrder Traversal: ");
        postOrderTraversal(root);
        System.out.println();
    }

    private void postOrderTraversal(Node root) {
        if (root != null) {
            postOrderTraversal(root.left);
            postOrderTraversal(root.right);
            System.out.print(root.data + " ");
        }
    }

    int count = 0;

    private void count(Node root) {

        if (root == null) {
            return;
        }
        count++;
        count(root.left);
        count(root.right);
    }

    public int count() {
        System.out.print("count of tree: ");
        count(root);
        return count;
    }

    public int countReturn(Node root) {
        if (root == null) {
            return 0;
        }
        return 1 + countReturn(root.left) + countReturn(root.right);
    }

    public E findMinValue() {
        if (root == null) {
            throw new IllegalStateException("Tree is empty");
        }
        return findMinValue(root);
    }

    private E findMinValue(Node root) {
        while (root.left != null) {
            root = root.left;
        }
        return root.data;
    }

    public E findMaxValue() {
        if (root == null) {
            throw new IllegalStateException("Tree is empty");
        }
        return findMaxValue(root);
    }

    private E findMaxValue(Node root) {
        while (root.right != null) {
            root = root.right;
        }
        return root.data;
    }

    public int sumOfEvenNumbers() {
        return sumOfEvenNumbers(root);
    }

    private int sumOfEvenNumbers(Node root) {
        if (root == null) {
            return 0;
        }
        int sum = (Integer) root.data % 2 == 0 ? (Integer) root.data : 0;
        return sum + sumOfEvenNumbers(root.left) + sumOfEvenNumbers(root.right);
    }

    public static void main(String[] args) {
        BinarySearchTree<Integer> bst = new BinarySearchTree<>();

        int[] numbers = {27, 32, 43, 54, 1, 32, 43, 7};
        for (int num : numbers) {
            bst.insert(num);
        }

        System.out.println("Tree contains 12: " + bst.contains(bst.root, 12));
        System.out.println("Tree contains 5: " + bst.contains(bst.root, 5));

        bst.inorderTraversal();
        bst.preOrderTraversal();
        bst.postOrderTraversal();
        System.out.println(bst.count());
        System.out.println("countReturn of tree: " + bst.countReturn(bst.root));

        System.out.println("Minimum value in the tree: " + bst.findMinValue());
        System.out.println("Maximum value in the tree: " + bst.findMaxValue());

        System.out.println("Sum of even numbers in the tree: " + bst.sumOfEvenNumbers());
    }
}
