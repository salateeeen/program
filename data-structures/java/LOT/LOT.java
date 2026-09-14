
import java.util.LinkedList;
import java.util.Queue;

public class LOT {

    private Node root;

    public LOT() {
        root = null;
    }

    private Node insert(Node root, int data) {
        Queue<Node> queue = new LinkedList<>();

        if (root == null) {
            Node newNode = new Node(data);
            root = newNode;
        }
        queue.add(root);

        while (!queue.isEmpty()) {

            Node current = queue.remove();

            if (current.getLeftChild() == null) {
                current.setLeftChild(new Node(data));
                break;
            } else {
                queue.add(current.getLeftChild());
            }

            if (current.getRightChild() == null) {
                current.setRightChild(new Node(data)) ;
                break;
            } else {
                queue.add(current.getRightChild());
            }
        }
        return root;
    }

    public int getRoot() {
        return root.getData();
    }

    public void insert(int item) {
        root = insert(root, item);
    }

    private void leveOrder(Node root) {
        Queue<Node> queue = new LinkedList<>();
        if (root == null) {
            return;
        }
        queue.add(this.root);
        
        while (!queue.isEmpty()) {
            Node current = queue.remove();
            System.out.print(current.getData() + " ");
            if (current.getLeftChild() != null) {
                queue.add(current.getLeftChild());
            }
            if (current.getRightChild() != null) {
                queue.add(current.getRightChild());
            }
        }
    }

    public void leveOrder() {
        leveOrder(root);
        System.out.println();
    }


    private void preOrder(Node root) {
        if (root == null) {
            return;
        }
        System.out.print(root.getData() + " ");
        preOrder(root.getLeftChild());
        preOrder(root.getRightChild());
    }

    public void preOrder() {
        preOrder(root);
        System.out.println();
    }

    private void inOrder(Node root) {
        if (root == null) {
            return;
        }
        inOrder(root.getLeftChild());
        System.out.print(root.getData() + " ");
        inOrder(root.getRightChild());
    }

    public void inOrder() {
        inOrder(root);
        System.out.println();
    }

    private void postOrder(Node root) {
        if (root == null) {
            return;
        }
        postOrder(root.getLeftChild());
        postOrder(root.getRightChild());
        System.out.print(root.getData() + " ");
    }

    public void postOrder() {
        postOrder(root);
        System.out.println();
    }
};
