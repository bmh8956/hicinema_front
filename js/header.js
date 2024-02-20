// 상단 메뉴 고정
// const header = $(".middle-inner ,.header_content.sticky");
// $(window).scroll(function () {
//   if ($(this).scrollTop() > 100) {
//     header.addClass("sticky");
//   } else {
//     header.removeClass("sticky");
//   }
// });




let before = document.getElementById("before");
		let after = document.getElementById("after");

		$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				after.style.display = "block"
				before.style.display = 'none'
			} else {
				after.style.display = "none"
				before.style.display = 'block'
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

