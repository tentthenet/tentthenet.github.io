function jrun(){
	
tags();
flux();
}
//
function flux(){
	
reader();
content();
footer();
}
//
function reader(){

document.getElementById('header').innerHTML = ""
+
"<header id='myreader'>"
+
"<a href='http://tentthenet.org' id='index' class='link' title='http://tentthenet.org'>"
+
"tentthenet.org"
+
"</a>"
+
"</header>"
+
"<iframe id='logo' scrolling='no' src='img/tentthenet_alfa.png'></iframe>"
+
"";
document.getElementById('index').style.fontFamily= "Sawasdee";
document.getElementById('index').style.color= "blue";
document.getElementById('index').style.textDecoration= "underline";


//document.getElementById('myreader').style.backgroundColor= "#E3F1EC";
document.getElementById('myreader').style.backgroundImage= "url()";
document.getElementById('myreader').style.paddingTop = "10px";
document.getElementById('myreader').style.paddingLeft = "10px";
document.getElementById('myreader').style.paddingRight = "10px";
document.getElementById('myreader').style.paddingBottom = "10px";
document.getElementById('myreader').style.textAlign= "center";

document.getElementById('logo').style.width = "150px";
document.getElementById('logo').style.height = "150px";
}
function content(){

document.getElementById('content').innerHTML = ""
+
"<center> <iframe id='mycontent' scrolling='no' src='mycontent.html'></iframe> </center>"
+
"";
document.getElementById('mycontent').style.width = "100%";
document.getElementById('mycontent').style.height = "500px";
}
function footer(){

document.getElementById('footer').style.bottom = "0";
document.getElementById('footer').style.width = "100%";
document.getElementById('footer').style.position = "fixed";

document.getElementById('footer').style.paddingTop = "10px";
document.getElementById('footer').style.paddingLeft = "10px";
document.getElementById('footer').style.paddingRight = "10px";
document.getElementById('footer').style.paddingBottom = "10px";

document.getElementById('footer').style.backgroundColor = "#E3F1EC";
document.getElementById('footer').style.paddingBottom = "10px";

document.getElementById('footer').innerHTML = ""
+
"<footer> <iframe class='mybody' id='myfooter' scrolling='no' src='footer.html'></iframe> </footer>"
+
"";
document.getElementById('myfooter').style.width = "100%";
}
//
