// Mohidul Abedin, Joseph Yusufov
// SoftDev pd02
// K13 -- Ask Circles [Change || Die]
// 2020-03-30

var button = document.getElementById("clear");
var pic = document.getElementById("vimage");
var dots = [] 

var clear = function(e) {
	e.preventDefault();
    while (pic.lastChild) {
        pic.removeChild(pic.lastChild);
    }

};
var plot = function(e) {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    e.offsetX;
    e.offsetY;
    if(e.target.getAttribute("id") == "vimage"){
	c.setAttribute("cx", e.offsetX);
	c.setAttribute("cy", e.offsetY);
	c.setAttribute("r", "10");
	c.setAttribute("fill", "blue");
	c.setAttribute("stroke", "blue");
	c.addEventListener("click", change);
	pic.appendChild(c);
    }
};

var change = function(e){
    e.target.setAttribute("fill", "cyan");
    e.target.addEventListener("click", move);
}

var move = function(e){
    randX = Math.floor(Math.random() * 501);
    randY = Math.floor(Math.random() * 501);
    e.target.setAttribute("cx", randX);
    e.target.setAttribute("cy", randY);
    e.target.setAttribute("fill", "blue");
    e.target.removeEventListener("click", move);
    e.target.addEventListener("click", change);
}

button.addEventListener("click", clear);
pic.addEventListener("click", plot)
