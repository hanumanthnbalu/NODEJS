// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;

// let _db;

// const mongoConnect = callback => {
//   MongoClient.connect(
//     'mongodb+srv://hnbalu:hnbalu123@nodejs-bgxcz.mongodb.net/Node_Shop?retryWrites=true',
//     { useNewUrlParser: true }
//   )
//     .then(client => {
//       console.log('Connected to MONGODB!');
//       _db = client.db();
//       callback();
//     })
//     .catch(err => {
//       console.log(err);
//       throw err;
//     });
// };

// const getDb = () => {
//   if (_db) {
//     return _db;
//   }
//   throw 'No database found!';
// };

// exports.mongoConnect = mongoConnect;
// exports.getDb = getDb;
