// const { MongoClient, ObjectId } = require("mongodb");

// const uri = "mongodb://localhost:27017/taskdb";
// const client = new MongoClient(uri);

// exports.handler = async (event) => {
//   const taskId = event.pathParameters.id;

//   try {
//     await client.connect();
//     const collection = client.db("taskdb").collection("tasks");

//     const result = await collection.deleteOne({ _id: new ObjectId(taskId) });

//     if (result.deletedCount === 1) {
//       return {
//         statusCode: 200,
//         body: JSON.stringify({ message: "Task deleted successfully" }),
//       };
//     } else {
//       return {
//         statusCode: 404,
//         body: JSON.stringify({ error: "Task not found" }),
//       };
//     }
//   } catch (err) {
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: "Failed to delete task" }),
//     };
//   } finally {
//     await client.close();
//   }
// };
