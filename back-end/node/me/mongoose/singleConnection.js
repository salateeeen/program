const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String
});


async function main() {

  const connection = await mongoose.createConnection(
    "mongodb://127.0.0.1:27018"
  );

  const client = new MongoClient("mongodb://127.0.0.1:27018")

  const companyADB =
    connection.useDb("company-a");

  const companyBDB =
    connection.useDb("company-b");


  const UserA =
    companyADB.model(
      "User",
      userSchema
    );

  const UserB =
    companyBDB.model(
      "User",
      userSchema
    );


  console.log(await UserA.find());

  console.log(await UserB.find());

  await connection.close();

}

main();