import java.util.ArrayList;
import java.util.Iterator;

public class iterator {
    public static void main(String[] args) {

        // Make a collection
        ArrayList<String> cars = new ArrayList<String>();
        cars.add("Volvo");
        cars.add("BMW");
        cars.add("Ford");
        cars.add("Mazda");
        cars.set(0, "Harly");

        // Get the iterator
        Iterator<String> it = cars.iterator();
        // Loop through a collection
        while (it.hasNext()) {
            System.out.println(it.next());
        }
    }
}
