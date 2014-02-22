//= require_tree .
//= require 'jquery/dist/jquery.js'

function getFromAPI(value){
    var out;
    $.ajax({
        url: './openpduapi/' + value,
        dataType: 'json',
        async: false,
        success: function(data){
            out = data.value;
        }
    });
    return out;
}

function fetchData(){
    console.log("Data fetch started");
    var globalpower = getFromAPI("globalpower");
    var globalcurrent = getFromAPI("globalcurrent");
    $('div[data-global-power]').text(globalpower); 
    $('div[data-global-current]').text(globalcurrent);   
}

$(document).ready(function(){
    $(document.body).append("<h2>Awesome!</h2>");
    fetchData();
});
