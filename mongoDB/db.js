/*--------------------------------------------------------------------------------------------------------------------*/
// Populate database with sample data
var populateDB = function() {

  var data = [
  {
    name: "CHATEAU",
    year: "2009"
  },
  {
    name: "LANNZA",
    year: "2006"
  }];

  db.collection('Data', function(err, collection) {
    collection.insert(data, {safe:true}, function(err, result) {});
  });

};

/*--------------------------------------------------------------------------------------------------------------------*/
// Setting MongoDB
var mongo = require('mongodb');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('mongodb', server, {safe: true});

db.open(function(err, db) {
  if(!err) {
    console.log("Connected to MONGO database");
    db.collection('Database', {safe:true}, function(err, collection) {

      db.collection('Data', function(err, collection) {
        collection.remove({}, function(err, items) {
          if(!err){
            console.log("Deleted All Data");
            console.log("Populating Sample Database.....");
            populateDB();
          }
        });
      });
    });
  }
});

exports.findById = function(req, res) {
  var id = req.params.id;
  console.log('Retrieving Object: ' + id);
  db.collection('Data', function(err, collection) {
    collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
      if(!err)
        res.send(item);
    });
  });
};

exports.findAllRecords = function(req, res) {
  console.log("Retrieve All data");
  db.collection('Data', function(err, collection) {
    collection.find().toArray(function(err, items) {
      if(!err)
        res.send(items);
    });
  });
};

exports.delAllRecords = function(callback){
  db.collection('Data', function(err, collection) {
    collection.remove({}, function(err, items) {
      if(!err)
        res.send(items);
    });
  });
}

exports.addNewObject = function(req, res) {
  var obj = req.body;
  console.log('Adding Obj: ' + JSON.stringify(obj));
  db.collection('Data', function(err, collection) {
    collection.insert(obj, {safe:true}, function(err, result) {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        console.log('Success Adding to DATA: ' + JSON.stringify(result[0]));
        res.send(result[0]);
      }
    });
  });
}
