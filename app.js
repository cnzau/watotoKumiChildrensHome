function display_story(id) {
	var x = id[1];
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
