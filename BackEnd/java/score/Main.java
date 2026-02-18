
public class Main {

    public static void main(String[] args) {
        Scoreboard highscores = new Scoreboard(5);
        String[] names = {"Rob", "Mike", "Rose", "Jill", "Jack", "Anna", "Paul", "Bob"};
        int[] scores = {750, 1105, 590, 740, 510, 660, 720, 400};
    
        for (int i=0; i < names.length; i++) {
          GameEntry gE = new GameEntry(names[i], scores[i]);
          System.out.println("Adding " + gE);
          highscores.add(gE);
          System.out.println(" Scoreboard: " + highscores);
        }
}
}
