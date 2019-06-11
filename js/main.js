var titlejs = document.getElementById('titlejs');

var z = calculate(6,6);
document.getElementById('demo11').innerHTML = z


function imgchange($imgsrc){
	if ($imgsrc == 'front') {
		document.getElementById("imgtest").src='img1.jpg';
	} else {
		document.getElementById("imgtest").src='img2.jpg';
	}
}

function demo2(){
	var x = document.getElementById('demo2');
	if (x.style.color === '') {
		x.style.color = 'blue';
		x.style.fontSize = '35px';
	} else {
		x.style.color = '';
		x.style.fontSize = '12px';
	}
}

function demo3(){
	var y = document.getElementById('demo3');
	y.style.color = 'white';
	if (y.innerHTML === "Hello") {
		y.innerHTML = "My Name is Hazim";
	} else {
		y.innerHTML = "Hello";
	}
}

function demo4(){
	var z = document.getElementById('demo4');
	if (z.style.display === '') {
		z.style.display = 'none';
	} else {
		z.style.display = '';
	}
}

function demo5(){
	var a = document.getElementById('demo5');
	if (a.innerHTML === "") {
		a.innerHTML = "Hello, This String generate from Javascript";
	} else {
		a.innerHTML = "";
	}
}

function demo6(){
	document.getElementById('demo6').innerHTML = 5 + 6;
}

function demo7(){
	alert(5 + 6);
}

function demo8(){
	console.log(5 + 6);
}

function demo9(){
	var x,y,z;
	x = 5;
	y = 6;
	z = x + y;
	document.getElementById('demo9').innerHTML = z;
}

function demo10(x,y){
	var z ;
	z = x + y;
	document.getElementById('demo10').innerHTML = z;
}

function calculate(x,y){
	return (x + y);
}