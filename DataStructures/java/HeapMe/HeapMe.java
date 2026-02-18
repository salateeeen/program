
import java.util.ArrayList;

public class HeapMe {

    private ArrayList<Integer> heapList;

    public HeapMe() {
        heapList = new ArrayList<>();
    }

    // Insert a value into the heapList
    public void insert(int value) {
        heapList.set(heapList.size(), value);
        heapUp();
    }

    // Remove the minimum value (root) from the heapList
    public int removeMin() {
        if (isEmpty()) {
            throw new IllegalStateException("Heap is empty");
        }
        int min = heapList.get(0);
        heapList.set(0, heapList.get(heapList.size() - 1));
        heapList.remove(heapList.size() - 1);
        heapDown();
        return min;
    }

    public boolean isEmpty() {
        return heapList.isEmpty();
    }

    private void heapDown() {
        int SmallIndex = 0;
        while (hasLeftChild(SmallIndex)) {
            int smallerChildIndex = getLeftChild(SmallIndex);
            if (hasRightChild(SmallIndex)) {
                smallerChildIndex = getLeftChild(SmallIndex) < getRightChild(SmallIndex) ? getLeftChildIndex(SmallIndex) : getRightChildIndex(SmallIndex);
            }

            if (heapList.get(SmallIndex) < heapList.get(smallerChildIndex)) {
                break;
            }
            swap(SmallIndex, smallerChildIndex);
            SmallIndex = smallerChildIndex;
        }
    }

    private void heapUp() {
        int SmallIndex = heapList.size() - 1;
        while (hasParent(SmallIndex) && getParent(SmallIndex) > heapList.get(SmallIndex)) {
            swap(getParentIndex(SmallIndex), SmallIndex);
            SmallIndex = getParentIndex(SmallIndex);
        }

    }

    private int getParentIndex(int index) {
        return (index - 1) / 2;
    }

    private int getParent(int index) {
        return heapList.get(getParentIndex(index));
    }

    private boolean hasParent(int index) {
        return index > 0;
    }

    private int getLeftChildIndex(int index) {
        return (index * 2) + 1;
    }

    private int getLeftChild(int index) {
        return heapList.get(getLeftChildIndex(index));
    }

    private boolean hasLeftChild(int index) {
        return getLeftChildIndex(index) < heapList.size();
    }

    private int getRightChildIndex(int index) {
        return (index * 2) + 2;
    }

    private int getRightChild(int index) {
        return heapList.get(getRightChildIndex(index));
    }

    private boolean hasRightChild(int index) {
        return getRightChildIndex(index) < heapList.size();
    }

    private void swap(int index1, int index2){
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
        HeapMe minHeap = new HeapMe();
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
