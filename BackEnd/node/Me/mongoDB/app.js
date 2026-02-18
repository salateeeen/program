
let students = [
  {
      "name": `sultan`
  },
  {
      "name": `omar`
  }
]

let courses =  [
  {
      "name": `java`
  },
  {
      "name": `c++`
  }
]

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://sultan:12345@student.nbzsstf.mongodb.net/?retryWrites=true&w=majority&appName=Student";

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
    await client.connect();

    /// choose collection to interact with 
    const db = client.db("student");

    /// choose collection to interact with (tables)
    const collectionStudent = db.collection(`collection-student`)

    
    await db.createCollection("collection-courses")
    const collectionCourses = db.collection(`collection-courses`)

    /// delete all 
    await collectionStudent.drop()
    await collectionCourses.drop()

    /// insert data 
   await collectionStudent.insertMany(students)

   await collectionCourses.insertMany(courses)
    
    /// get all
    const studentsData = await collectionStudent.find().toArray()
    console.log(`students`, studentsData);

    const coursesData = await collectionCourses.find().toArray()
    console.log(`courses`, coursesData);


  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
