$(document).ready(function() {

  var images = [
    "images/slide1.jpg",
    "images/slide2.png",
    "images/slide3.jpg"
  ];

  var currentIndex = 0;

  $("#slideshowNext").click(function() {
    currentIndex += 1;

    if (currentIndex >= images.length) {
      currentIndex = 0;
    }

  $("#slideshowimage").attr("src", images[currentIndex])

});
});
