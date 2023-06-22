$(".number").click(function () {
  $(".number").removeClass("selected");
  $(this).addClass("selected");
});

$("input[type='submit']").click(function (e) {
  e.preventDefault();
  var selected = $(".selected");
  var value = selected.length > 0 ? selected.val() : null;

  if (value !== null) {
    console.log(value);
    $(".box:first-child").addClass("hidden");
    $(".box:nth-child(2)").removeClass("hidden");
    $("#value").text(value);
  } else {
    $(".box").addClass("shake-animation");
    setTimeout(function () {
      $(".box").removeClass("shake-animation");
    }, 1000);
  }
});
