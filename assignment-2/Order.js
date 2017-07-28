
var imageurl = new Array();
imageurl[0] = "images/image1.jpg";
imageurl[1] = "images/image2.jpg";
imageurl[2] = "images/image3.jpg";
imageurl[3] = "images/image4.jpg";
imageurl[4] = "images/image5.jpg";
imageurl[5] = "images/image6.jpg";
imageurl[6] = "images/image7.jpg";
imageurl[7] = "images/image8.jpg";
var element = document.getElementById("mainBody");

    PhotoGalleryLib.onSizeClassChange(function show(a){
		var parent = document.getElementById("mainBody");
		var child = document.getElementById("imagesGrid");
		if(child){
		parent.removeChild(child);}

	   var node ="This page is:"+a;
		 size = a;
		console.log(node);
		parent.appendChild(PhotoGalleryLib.generateGrid (imageurl, size));
		document.getElementById("size").innerHTML = node;

	});
    console.log(size);