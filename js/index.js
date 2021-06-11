$(function(){
    $(".slide").css("display","none");
    $(".container header i img").on("click", function(){
        $(".slide").css("display","block");
    });
    $(".slide .button i img") .on("click", function(){
        $(".slide").css("display","none");
    });

    // header  h1
    setInterval(function(){ 
        $('.hometitle h2').toggleClass('on');
    }, 500);

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


// 위치 영역
$('.contact').click(function(){
    var offset = $('#resume').offset();
    $('html, body').animate({
        scrollTop:offset.top
    },500);
    return false;
});

//path
// const svgPath = document.querySelectorAll('.path');

// const svgText = anime({
//   targets: svgPath,
//   loop: true,
//   direction: 'alternate',
//   strokeDashoffset: [anime.setDashoffset, 0],
//   easing: 'easeInOutSine',
//   duration: 700,
//   delay: (el, i) => { return i * 500 }
// });


});//준비 문서 선언