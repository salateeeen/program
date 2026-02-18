
public class Main {

  public static void main(String[] args) {
    GameEntry gE7 = new GameEntry ("asal", 7);
    GameEntry gE3 = new GameEntry ("zyad", 2);
    GameEntry gE1 = new GameEntry ("sultan", 1);
    GameEntry gE2 = new GameEntry ("omar", 3);
    GameEntry gE5 = new GameEntry ("osama", 5);
    GameEntry gE6 = new GameEntry ("zaid", 6);
    GameEntry gE4 = new GameEntry ("ahmad", 4);
    Scoreboard highscores = new Scoreboard(10);
        highscores.add(gE1);
        highscores.add(gE2);
        highscores.add(gE3);
        highscores.add(gE4);
        highscores.add(gE5);
        highscores.printPlayers();
        highscores.add(gE6);
        highscores.printPlayers();
        highscores.add(gE7);
        highscores.printPlayers();
        highscores.remove(3);
        highscores.printPlayers();
}
}