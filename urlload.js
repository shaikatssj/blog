$(document).ready(function(){

  $.ajax({
    url: "text.txt", 
    dataType: 'text', 
    success: function(data) { 
      $("#sentences").html(data);
    },
    error: function() { 
      alert("error");
    }
  });     
   
});