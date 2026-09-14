const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
});

userSchema.plugin(addAge)

userSchema.methods.getAge = () => {
  return 13;
}

function addAge(schema) {
  schema.add({
    age: {
      type: Number,
      default: 23,
      required: true
    }
  })
}
userSchema.pre("find", async function() {
  console.log("find middleware");
});

userSchema.index("name", { unique: true })

async function main() {

  const companyAConnection = await mongoose.createConnection(
    "mongodb://127.0.0.1:27018/company-a"
  );

  const companyBConnection = await mongoose.createConnection(
    "mongodb://127.0.0.1:27018/company-b"
  );


  const UserA = companyAConnection.model(
    "User",
    userSchema
  );

  const UserB = companyBConnection.model(
    "User",
    userSchema
  );


  const client = new MongoClient("mongodb://127.0.0.1:27018")


  console.log(await client.db().admin().listDatabases());

  console.log(await UserA.find());

  console.log(await UserB.find());


  await companyAConnection.close();

  await companyBConnection.close();

}

main();