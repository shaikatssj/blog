$(document).ready(function(){

  $.ajax({
    url: urt, 
    dataType: 'text', 
    success: function(data) { 
      $("#sentences").html(data);
    },
    error: function() { 
      alert("error");
    }
  });     
   
});
