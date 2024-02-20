// 상단 메뉴 고정
const header = $(".middle-inner ,.header_content.sticky");
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    header.addClass("sticky");
  } else {
    header.removeClass("sticky");
  }
});

const color = $(".logologo ");
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    color.addClass("sticky");
  } else {
    color.removeClass("sticky");
  }
});

const color1 = $(".menuLink , .submenu");
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    color1.addClass("sticky");
  } else {
    color1.removeClass("sticky");
  }
});

// ============================================

//nav
function nav() {
  var depth1 = $("#nav > ul > li");
  var depth2 = $("#nav > ul > li > div > ul > li");
  $(depth1)
    .children("a")
    .off()
    .on("mouseenter focusin", function () {
      $(this).parent("li").addClass("ov").siblings("li").removeClass("ov");
      $(depth1)
        .children("div")
        .hide()
        .children("ul")
        .stop()
        .animate({ opacity: "0" });
      $(this)
        .siblings("div")
        .show()
        .children("ul")
        .stop()
        .animate({ opacity: "1" });
    });
  $(depth2)
    .children("a")
    .off()
    .on("mouseenter focusin", function () {
      $(this).parent("li").addClass("ov").siblings("li").removeClass("ov");
      $(depth2)
        .children("div")
        .hide()
        .children("ul")
        .stop()
        .animate({ opacity: "0" });
      $(this)
        .siblings("div")
        .show()
        .children("ul")
        .stop()
        .animate({ opacity: "1" });
    });
  $("#nav > ul")
    .off()
    .on("mouseleave", function () {
      $("#nav li").removeClass("ov");
      $("#nav li > div").hide().children("ul").stop().animate({ opacity: "0" });
      $(
        "#nav > ul > li.active > div, #nav > ul > li > div > ul > li.active > div"
      )
        .show()
        .children("ul")
        .stop()
        .animate({ opacity: "1" });
    });
}

// ====스크롤 시 헤더 변경====
// 외부 CSS 파일 로드 함수
function loadExternalCSS(url) {
  $("<link/>", {
    rel: "stylesheet",
    type: "text/css",
    href: url,
  }).appendTo("head");
}

// 외부 파일 로드 및 스크롤 이벤트 처리
$(document).ready(function () {
  // 외부 CSS 파일 로드
  loadExternalCSS("styles.css");

  // 외부 파일의 경로
  var externalFilePath = "external.html";

  // 외부 파일 로드
  $.ajax({
    url: externalFilePath,
    dataType: "html",
    success: function (data) {
      // 로드한 HTML에서 header 요소 추출
      var externalHeader = $(data).filter("header");

      // 외부 헤더 숨기기
      externalHeader.hide();

      // 스크롤 이벤트 처리
      $(window).scroll(function () {
        var scrolled = $(window).scrollTop();

        // 기존 헤더의 높이
        var headerHeight = $("header").outerHeight();

        if (scrolled > headerHeight) {
          // 스크롤을 헤더 높이만큼 내린 경우 외부 헤더 보이기
          externalHeader.show();
        } else {
          // 스크롤을 올린 경우 기존 헤더 보이기
          externalHeader.hide();
        }
      });
    },
  });
});
