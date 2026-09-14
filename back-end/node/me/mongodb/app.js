const { MongoClient, ServerApiVersion, BSONType } = require('mongodb');
const uri = "mongodb://localhost:27017";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    /// Connect the client to the server	(optional starting in v4.7)
    // console.log(client);
    await client.connect();

    // console.log(client);

    /// choose collection to interact with 
    const db = client.db("mazraetak_db");


    const usersCollection = db.collection("users");
    const indexes = await usersCollection.listIndexes().toArray();

    console.log(indexes);

    //   /// choose collection to interact with (tables)
    //   const collectionStudent = db.collection(`collection-student`)


    //   await db.createCollection("collection-courses")
    //   const collectionCourses = db.collection(`collection-courses`)

    //   /// delete all 
    //   await collectionStudent.drop()
    //   await collectionCourses.drop()

    //   /// insert data 
    //  await collectionStudent.insertMany(students)

    //  await collectionCourses.insertMany(courses)

    //   /// get all
    //   const studentsData = await collectionStudent.find().toArray()
    //   console.log(`students`, studentsData);

    //   const coursesData = await collectionCourses.find().toArray()
    //   console.log(`courses`, coursesData);


  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
