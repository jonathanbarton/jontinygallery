//https://jsfiddle.net/2kqd1v20/
$(document).ready(function() {
  $("#gallery").each(function() {
    var slider = $(this);
    var currentIndex = 0;
    var maxIndex = slider.find("img").length-1;
    hideImages();

		function hideImages() {
     slider.find("img:not(:eq(0))").hide();
    }

    function next() {
    	var nextIndex = currentIndex + 1;
      if(nextIndex > maxIndex) {
      	nextIndex = 0;
      }
      slider.find("img:eq(" + currentIndex + ")").hide();
      slider.find("img:eq(" + nextIndex + ")").fadeIn();
      currentIndex = nextIndex;
      setTimeout(next, 4000);
    }
    setTimeout(next, 4000);
  });
});
