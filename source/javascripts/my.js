//= require_tree .
//= require 'jquery/dist/jquery.js'

function getFromAPI(value){
    var out;
    $.ajax({
        url: conf.apibase + value,
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
    var totalpower = getFromAPI("total" + conf.path.power);
    var totalcurrent = getFromAPI("total" + conf.path.current);
    $('[data-total-power]').text(totalpower); 
    $('[data-total-current]').text(totalcurrent);   
}

$(document).ready(function(){
    fetchData();
});
