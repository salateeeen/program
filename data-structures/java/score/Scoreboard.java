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
    if (isEmpty()) {
      gameEntries[numEntries] = player;
      numEntries++;
    } else if (!isEmpty() && !isFull()) {
      numEntries++;
      int j = numEntries - 1;
      while (j > 0 && gameEntries[j - 1].getScore() < player.getScore()) {
        gameEntries[j] = gameEntries[j - 1];
        j--;
      }
      gameEntries[j] = player;
    } else if (isFull()) {
      int j = numEntries - 1;
      while (j > 0 && gameEntries[j].getScore() < player.getScore()) {
        gameEntries[j] = gameEntries[j - 1];
        j--;
      }
      gameEntries[j] = player;
    }

  }

  public void remove(int index) {
    if (!isEmpty()) {
      while (index < numEntries - 1) {
        gameEntries[index] = gameEntries[index + 1];
        index++;
      }
      numEntries--;
    }
  }

  public boolean isEmpty() {
    return numEntries == 0;
  }

  public boolean isFull() {
    return numEntries == size;
  }

  public void printPlayers(){
    System.out.print("[");
    for(int i = numEntries -1; i >= 0 ; i--){
      System.out.print(gameEntries[i].getName()+"  ");
      
      if(i == 0) {
      System.out.print(gameEntries[i].getScore());
    }else System.out.print(gameEntries[i].getScore()+ ", ");

    }
    System.out.println("]");

  }

}