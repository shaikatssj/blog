$(document).ready(function(){

  $.ajax({
    url: "https://cdn.rawgit.com/shaikatssj/scodec-cdn/master/index.html", 
    dataType: 'text', 
    success: function(data) { 
      $("#sentences").html(data);
    },
    error: function() { 
      alert("error");
    }
  });     
   
});
