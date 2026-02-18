public class Scoreboard {
  private int size;
  private int numEntries;
  private GameEntry[] gameEntries;

  public Scoreboard(int s) {
    numEntries = 0;
    size = s;
    gameEntries = new GameEntry[size];
  }

  public void add(GameEntry player) {
    if (gameEntries.length < size || gameEntries[numEntries - 1].getScore() < player.getScore()) {
      if (gameEntries.length < size) {
        numEntries++;
      }
      int j = numEntries - 1;
      while (j > 0 && gameEntries[j - 1].getScore() < player.getScore()) {
        gameEntries[j] = gameEntries[j - 1];
        j--;
      }
      gameEntries[j] = player;
    }
  }

  public void remove(int index) {
    if (!isEmpty()) {
      while (index >0 &&  index < numEntries - 1) {
        gameEntries[index] = gameEntries[index + 1];
        index++;
      }
      numEntries--;
    }
  }

  public boolean isEmpty() {
    return numEntries == 0;
  }

  public void printPlayers(){
    System.out.println("[");
    for(int i = 0; i < numEntries ; i++){
      System.out.print(gameEntries[i].getName()+"  ");
      System.out.print(gameEntries[i].getScore()+ ", ");
    }
    System.out.println("]");

  }

}