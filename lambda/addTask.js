// const { MongoClient } = require('mongodb');

// // Local MongoDB URI — make sure MongoDB server is running on your system
// const uri = "mongodb://localhost:27017";
// const client = new MongoClient(uri);

// exports.handler = async (event) => {
//   const body = JSON.parse(event.body);
//   const task = { title: body.title };

//   try {
//     await client.connect();
//     const collection = client.db("taskdb").collection("tasks");

//     const result = await collection.insertOne(task);

//     return {
//       statusCode: 200,
//       body: JSON.stringify({
//         _id: result.insertedId,
//         title: task.title,
//       }),
//     };
//   } catch (error) {
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: "Failed to add task", details: error.message }),
//     };
//   } finally {
//     await client.close();
//   }
// };



