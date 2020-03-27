// Mohidul Abedin, Joseph Yusufov
// SoftDev pd02
// K12 -- Connect the Dots
// 2020-03-30

var button = document.getElementById("clear");
var pic = document.getElementById("vimage");

var prevX;
var prevY;

var clear = function(e) {
	e.preventDefault();
    while (pic.lastChild) {
        pic.removeChild(pic.lastChild);
    }
    prevX = -1;

};
var plot = function(e) {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    var l = document.createElementNS("http://www.w3.org/2000/svg", "path");
	if (prevX == -1) {
		prevX = e.offsetX;
		prevY = e.offsetY;
	}
    c.setAttribute("cx", e.offsetX);
    c.setAttribute("cy", e.offsetY);
    c.setAttribute("r", "5");
    c.setAttribute("fill", "black");
    c.setAttribute("stroke", "black");
    pic.appendChild(c);
    var par = "M " + e.offsetX + " " + e.offsetY + " L " + prevX + " " + prevY + " Z";
    console.log(par)
    l.setAttribute("d",par);
    l.style.stroke = "#000"; //Set stroke colour
    l.style.strokeWidth = "5px";
    pic.appendChild(l)
	prevX = e.offsetX;
	prevY = e.offsetY;



};

button.addEventListener("click", clear);
pic.addEventListener("click", plot)
