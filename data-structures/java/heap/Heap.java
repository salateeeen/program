import java.util.ArrayList;

public class Heap {

    private ArrayList<Integer> heapList;

    public Heap() {
        heapList = new ArrayList<>();
    }

    // Insert a value into the heapList
    public void insert(int value) {
        heapList.add(value);
        heapUp(); // Maintain heapList property after insertion
    }

    // Remove the minimum value (root) from the heapList
    public int removeMin() {
        if (isEmpty()) {
            throw new IllegalStateException("Heap is empty");
        }
        int min = heapList.get(0);
        int lastIndex = heapList.size() - 1;
        // Move the last element to the root and remove it
        heapList.set(0, heapList.get(lastIndex));
        heapList.remove(lastIndex);
        heapDown(); // Maintain heapList property after removal
        return min;
    }

    // Check if the heapList is empty
    public boolean isEmpty() {
        return heapList.isEmpty();
    }

    // Maintain heapList property after insertion
    private void heapUp() {
        int index = heapList.size() - 1;
        while (hasParent(index) && getParent(index) > heapList.get(index)) {
            swap(index, getParentIndex(index));
            index = getParentIndex(index);
        }
    }

    // Maintain heapList property after removal
    private void heapDown() {
        int index = 0;
        while (hasLeftChild(index)) {
            int smallerChildIndex = getLeftChildIndex(index);
            if (hasRightChild(index) && getRightChild(index) < getLeftChild(index)) {
                smallerChildIndex = getRightChildIndex(index);
            }
            if (heapList.get(index) <= heapList.get(smallerChildIndex)) {
                break;
            }
            swap(index, smallerChildIndex);
            index = smallerChildIndex;
        }
    }

    private boolean hasParent(int index) {
        return index > 0;
    }

    private int getParentIndex(int index) {
        return (index - 1) / 2;
    }

    private int getParent(int index) {
        return heapList.get(getParentIndex(index));
    }

    private boolean hasLeftChild(int index) {
        return getLeftChildIndex(index) < heapList.size();
    }

    private int getLeftChildIndex(int index) {
        return 2 * index + 1;
    }

    private int getLeftChild(int index) {
        return heapList.get(getLeftChildIndex(index));
    }

    private boolean hasRightChild(int index) {
        return getRightChildIndex(index) < heapList.size();
    }

    private int getRightChildIndex(int index) {
        return 2 * index + 2;
    }

    private int getRightChild(int index) {
        return heapList.get(getRightChildIndex(index));
    }

    private void swap(int index1, int index2) {
        int temp = heapList.get(index1);
        heapList.set(index1, heapList.get(index2));
        heapList.set(index2, temp);
    }

    // Replace the root value (minimum) with a new value
    public void replaceMin(int value) {
        if (isEmpty()) {
            throw new IllegalStateException("Heap is empty");
        }
        heapList.set(0, value);
        heapDown();
    }

    public static void main(String[] args) {
        Heap minHeap = new Heap();
        minHeap.insert(4);
        minHeap.insert(8);
        minHeap.insert(2);
        minHeap.insert(5);
        minHeap.insert(1);
        while (!minHeap.isEmpty()) {
            System.out.print(minHeap.removeMin() + " ");
        }
        System.out.println();

        // Test replaceMin
        minHeap.insert(10);
        minHeap.insert(15);
        minHeap.insert(5);
        minHeap.replaceMin(3);
        System.out.println("After replacing root with 3:");
        while (!minHeap.isEmpty()) {
            System.out.print(minHeap.removeMin() + " ");
        }
    }
}

