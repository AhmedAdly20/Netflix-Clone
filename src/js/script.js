$(document).ready(function () {
    $(window).on('scroll',function(){
        if ($(this).scrollTop() > 100){
            $('.navbar').addClass('bg-black-transeparent');
        } else{
            $('.navbar').removeClass('bg-black-transeparent');
        }
    });
});