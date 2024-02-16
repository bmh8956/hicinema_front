// 상단 메뉴 고정
const header = $(".middle-inner");
$(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
    header.addClass("sticky");
  } else {
    header.removeClass("sticky");
  }
});

const color = $(".logologo , .memberInfo");
$(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
    color.addClass("sticky");
  } else {
    color.removeClass("sticky");
  }
});



const color1 = $(".menuLink , .submenu");
$(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
    color1.addClass("sticky");
  } else {
    color1.removeClass("sticky");
  }
});

