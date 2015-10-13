var MongoClient = require('./').MongoClient;

// function healthCheck(callback) {
//   MongoClient.connect('mongodb://localhost:31000,localhost:31001,localhost:31002/test', function(err, db) {
//     var r = err;

//     // setTimeout(function() {
//       db.close(true, function(err, result) {
//         callback(r);
//       });
//     // }, 1000)
//   });
// }

// function routine() {
//   healthCheck(function(r) {
//     console.log(r);
//   });

//   setTimeout(routine, 30000);
// }

// routine();

// MongoClient.connect('mongodb://ole:ole@localhost:27017/test', function(err, db) {
//   console.dir(err)
//   console.dir(db)
// });

  console.log("--------------------------------------------- TRY 1")
  console.log("--------------------------------------------- TRY 2")
  console.log("--------------------------------------------- TRY 3")

MongoClient.connect('mongodb://localhost:50000,localhost:50001/thing', function(err, db) {
  // db.on('fullsetup', function() {

  // })

  console.log("--------------------------------------------- TRY")
  console.log("--------------------------------------------- TRY")
  console.log("--------------------------------------------- TRY")
  // console.dir(err)
  // console.dir(db)

  db.authenticate("username", "password", {authMechanism: 'SCRAM-SHA-1'}, function(err, r) {
    console.log("--------------------------------------------- 1")
    console.dir(err)
    console.dir(r)

    db.close();
  });

  // console.dir(err)
  // console.dir(db)
  // db.close();
});