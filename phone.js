
if (window.innerWidth && window.innerWidth <= 720) {
  $(document).ready(function(){
  var pages = $("#map");
  pages.css("left", "100%");
  pages.css("display", "none");
  });
  function movePage(id) {
	  window.theID = id;
	  window.fromHome = "go";
	  $(id).css("display", "inline");
	  $(id).css("left", ($(document).width())*.5);
	  $("#home").animate({left: '-100%'}, 500, "linear");
	  $(id).animate({left: '0px'}, 500, "linear", function() {
		$("#home").css("left", "-100%");
		$("#home").css("display", "none");
		})
  }
  function moveHome() {
	  if (window.fromHome=="go"){
		  $("#home").css("left", -($(document).width()));
		  window.fromHome = "stop";
	  }
      $("#home").css("display", "inline");
	  $("#home").animate({left: '0px'}, 500, "linear");
	  $(theID).animate({left: '100%'}, 500, "linear", function() {
		$(theID).css("left", "100%");
		$(theID).css("display", "none");

  		})
  }
}
