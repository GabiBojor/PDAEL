

$(document).ready(function(){
    
    $('.next').click(function(e){
        e.preventDefault;
        var rel = $(this).attr('rel');
        $('.custom-content').hide();
        $('div#' + rel).fadeIn();
    })
});

