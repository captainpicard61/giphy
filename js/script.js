// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */


$("#search-button").click(function(){
 var searchterm = $("#search-term").val();
    
    
    $.ajax({
        url: "https:api.giphy.com/v1/gifs/search?q="+searchterm+"=pg&api_key=cVRNyx7QJZX0F6nTWQ0XbssO1yb4KtSM",
        method:"GET",
        success:function(response){
             $('body').append("<img src=" + response.sprites.front_default + ">");
            
        },
        
    });

});

