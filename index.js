$(document).ready(function(){
  $('.fa-search').on('click',function(){
    var input = $('.search_bar').val();
    console.log(input);
    onsubmit(input);
  });
  
  $('.fa-bath').on('click',function(){
    ///this is for the random search 
    var random = "mahesh bhupati";
    onsubmit(random);
  });
  var onsubmit = function(searchterm){
  $.ajax({
    type:'GET',
    url:"https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchterm +"&format=json&callback=?",
    cache:false,
    async:false,
    dataType: "json",
    success:function(data){
      console.log(data);
      $('.topic-name').html(
"<h1>Topic Name:</h1<h1>"+data[0]+"</h1>");
      $('.explanation').html("<h1>Explanation</h1><b>"+data[2]+"</b>");
      for(var i=0;i<data[3].length;i++){
        console.log(data[3][i]);
        var html = "";
        html = html+"<a href="+data[3][i]+"></a>"
        $('.results-search').html(html);
      }
      
    },
    error:function(err){
      console.log(err);
    }
  });
  };
});
