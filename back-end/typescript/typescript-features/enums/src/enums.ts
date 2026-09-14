/// the value of variable is one of them
enum childs {
  sex = 20,
  seven,
  eight,
}

enum level {
  KIDS = childs.seven,
  EASY,
  HARD,
}

const lvl: string = "easy";
if (lvl === "easy") {
  console.log(`the seconds of ${lvl} is ${level.EASY}`);
}

enum Role {
  Admin,
  Guest,
  User
}

//$ more public with use this except enums
///letiral types the variable has an specific values
const userRoel : `admin` | `guest` | `user` = "guest"
