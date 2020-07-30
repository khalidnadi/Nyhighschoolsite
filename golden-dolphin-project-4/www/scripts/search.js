$(document).ready(function() {
  $("#searchbar").keyup(function() {
    var text = $("#searchbar").val();
    textlc = text.toLowerCase();
    textuc = textlc.substring(0,1).toUpperCase() + textlc.substring(1);
    $(".tutor-card:not(:contains("+ text +"))").addClass("hidden");
    $(".tutor-card:contains(" + text + ")").removeClass("hidden");
    $(".tutor-card:contains(" + textlc + ")").removeClass("hidden");
    $(".tutor-card:contains(" + textuc + ")").removeClass("hidden");
  });
});
