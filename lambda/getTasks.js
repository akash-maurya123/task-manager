// const { MongoClient } = require("mongodb");

// const uri = process.env.MONGODB_URI;
// const client = new MongoClient(uri);

// exports.handler = async (event) => {
//   try {
//     await client.connect();
//     const collection = client.db("taskdb").collection("tasks");

//     const tasks = await collection.find().toArray();

//     return {
//       statusCode: 200,
//       body: JSON.stringify(tasks),
//     };
//   } catch (err) {
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: "Failed to fetch tasks" }),
//     };
//   } finally {
//     await client.close();
//   }
// };
