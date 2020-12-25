$(function(){

$(window).bind("resize",function(){
    if($(this).width() <769){
    $('#orgs').removeClass('flex-row').addClass('flex-column')
    }
})
})
