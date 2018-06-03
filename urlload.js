$(document).ready(function(){

  $.ajax({
    url: "https://cdn.rawgit.com/shaikatssj/sahifa/safia/index.txt", 
    dataType: 'text', 
    success: function(data) { 
      $("#sentences").html(data);
    },
    error: function() { 
      alert("error");
    }
  });     
   
});
