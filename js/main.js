$.ajax({
  type: "GET",
  url: "https://api.myjson.com/bins/tls49",
  dataType: "json",
  success: function(response){ formObj(response); },
  error: function(err){ console.log("Error in method ",err);}
});

function formObj(res){
  var list = [], lang =[];
  for(i = 0; i < res.length ; i++)
    console.log(res[i]);
}
