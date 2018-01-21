var MongoClient = require('mongodb').MongoClient;
exports.createconnection=function () {
MongoClient.connect("mongodb://ashwinstyles:stylesashwin@ds117931.mlab.com:17931/nprojector").then(function(client){
console.log("connected to database");
//client.db("nprojector");
exports.database=client.db("nprojector")
console.log("connected to nprojector");
}
);
}
