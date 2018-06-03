$(document).ready(function(){

  $.ajax({
    url: urp, 
    dataType: 'text', 
    success: function(data) { 
      $("#sentences").html(data);
    },
    error: function() { 
      alert("error");
    }
  });     
   
});
