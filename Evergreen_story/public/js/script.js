console.log("hi");
console.log($(window).scrollTop());

$(window).scroll(function () {
  console.log($(window).scrollTop());
  if ($(window).scrollTop() > 200) {
    $("#gottop>a").fadeIn();
  } else {
    $("#gottop>a").fadeOut();
  } //($(window).scrollTop() > 150 ) end
});

$("#menu").on("click", function () {
  $("#mobile-nav").slideDown();
});
$("#close_btn").on("click", function () {
  $("#mobile-nav").hide();
});


