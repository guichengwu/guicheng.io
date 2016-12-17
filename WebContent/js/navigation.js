function hideHeaderPic() {
	var headerPicture =document.getElementById("headPicture");
	headerPicture.style.display = 'none';
}

function personal() {
	hideHeaderPic();
	document.getElementById("main").innerHTML='<object width=\"100%\" height="1650px" style="overflow-y: hidden;" type="text/html" data="personal.html"></object>';
}

function project() {
	hideHeaderPic();
	document.getElementById("main").innerHTML='<object width=\"100%\" height="2050px" style="overflow-y: hidden;"type="text/html" data="project.html"></object>';
}

function blog() {
	hideHeaderPic();
	document.getElementById("main").innerHTML='<object width=\"100%\" height="1200px" type="text/html" data="blog.html"></object>';
}