$(document).ready(function() {
      $(window).on('scroll', function() {
        if (Math.round($(window).scrollTop()) > 100) {
          $('.navbar').addClass('scrolled');
        } else {
          $('.navbar').removeClass('scrolled');
        }
      });
    });

function display_story(id) {
	var x = id[1];
	document.getElementById("s1").removeAttribute("class", "active");
	document.getElementById("s2").removeAttribute("class", "active");
	document.getElementById("s3").removeAttribute("class", "active");
	document.getElementById("s4").removeAttribute("class", "active");
	document.getElementById("s5").removeAttribute("class", "active");
	document.getElementById("s6").removeAttribute("class", "active");
	document.getElementById("s7").removeAttribute("class", "active");
	for (var i = 1; i <= 7; i++) {
		if (id[1] == i) {
			document.getElementById("s"+x).setAttribute("class", "active");
		}
	}
	
	document.getElementById("ds1").style.display = "none";
	document.getElementById("ds2").style.display = "none";
	document.getElementById("ds3").style.display = "none";
	document.getElementById("ds4").style.display = "none";
	document.getElementById("ds5").style.display = "none";
	document.getElementById("ds6").style.display = "none";
	document.getElementById("ds7").style.display = "none";
	for (var i = 1; i <= 7; i++) {
		if (id[1] == i) {
			document.getElementById("ds"+x).style.display = "inline";
		}
	}
}
