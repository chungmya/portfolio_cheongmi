$(function(){
//togglemenu
    $('header .togglemenu').css('marginRight', '-100%');
    $('.togglebtn').on('click', function(){
        $('.togglemenu').animate({
            marginRight: 0
        }, 800, 'easeOutQuart');
    });
    $('.closebtn').on('click', function(){
        $('.togglemenu').animate({
            marginRight: -100 + '%'
        }, 800, 'easeOutQuart');
    });

// scroll top button .topbtn
//e.preventDefault();
$('#topbtn').click(function(e){
    e.preventDefault();
});

$('#topbtn').click(function(){
    $('html, body').animate({
        scrollTop:0
    },500);
    return false;
});
$(window).scroll(function(){ //버튼 모양 숨김
    if($(window).scrollTop()>400){
        scrollTimeoutㄴ = setTimeout(function(){$('#topbtn:hidden').fadeIn()},100);
    }
    else{
        scrollTimeout = setTimeout(function(){$('#topbtn:visible').fadeOut()},100);    
    }
});

});//준비선언문서