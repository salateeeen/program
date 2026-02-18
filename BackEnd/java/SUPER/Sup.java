
public class Sup extends Super {
    public String print() {
        return "Sup";
    }

    public void printSuper() {
        System.out.println(super.print()); 
    }
    public void printClass() {
        System.out.println(print()); 
    }

}