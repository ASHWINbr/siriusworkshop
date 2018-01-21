var movies = require('./movieData');
var DBservice=require('../services/DBservice');
exports.getallMovies = function(req,res){
var DB=DBservice.database;
var moviesCollection=DB.collection("movies");
moviesCollection.find().toArray().then(function(result){
  //console.log("RESULT :"+ result);
  var outputjson={
    "isSuccess" : true,
    "data" : result
  };

return res.json(outputjson);
});
};

exports.addNewMovie = function (req,res,next){
  var db=DBservice.database,
  movie=req.body,
  moviesCollection=db.collection("movies");
  moviesCollection.insert(movie).then( function(save_data){
    return res.json({
      "isSuccess":true
    });
  });

}
//console.log(DBservice.database);
