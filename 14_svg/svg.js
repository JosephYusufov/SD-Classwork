// Ahmed Sultan, Joseph Yusufov
// SoftDev pd02
// K14 -- Ask Circles [Change || Die]
// 2020-04-01

var clearButton = document.getElementById("clear");
var danceButton = document.getElementById("dance");
var extraButton = document.getElementById("extra");
var stopButton = document.getElementById("stop");
var pic = document.getElementById("vimage");
var id;
var velocity = 1;
var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
var colorMode = false;

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
	c.setAttribute("class", "NE"); // We can make this random
	// c.addEventListener("click", change);
	pic.appendChild(c);
    };
};

var extra = function(){
    for(var i = 0; i < pic.children.length; i++){
	pic.children[i].setAttribute("fill", randomColor());
	pic.children[i].setAttribute("stroke", randomColor());	
    }
    colorMode = true;
};

var dance = function(){
    window.cancelAnimationFrame(id);
    for(var i = 0; i < pic.children.length; i++){
	var thisChild = pic.children[i];
	var thisChildDir = pic.children[i].getAttribute("class");
	var thisChildX = parseInt(pic.children[i].getAttribute("cx"));
	var thisChildY = parseInt(pic.children[i].getAttribute("cy"));
	
	if(thisChildX == 500) {
	    if(colorMode == true){thisChild.setAttribute("fill", randomColor())};
	    if(colorMode == true){thisChild.setAttribute("stroke", randomColor())};	    
            if(thisChildDir == "NE"){thisChild.setAttribute("class", "NW")};
            if(thisChildDir == "SE"){thisChild.setAttribute("class", "SW")};
	}
	if(thisChildX == 0) {
	    if(colorMode == true){thisChild.setAttribute("fill", randomColor())};
	    if(colorMode == true){thisChild.setAttribute("stroke", randomColor())};	    	
            if(thisChildDir == "NW"){thisChild.setAttribute("class", "NE")};
            if(thisChildDir == "SW"){thisChild.setAttribute("class", "SE")};
	}
	if(thisChildY == 500) {
	    if(colorMode == true){thisChild.setAttribute("fill", randomColor())};
	    if(colorMode == true){thisChild.setAttribute("stroke", randomColor())};	    	
            if(thisChildDir == "SE"){thisChild.setAttribute("class", "NE")};
            if(thisChildDir == "SW"){thisChild.setAttribute("class", "NW")};
	}
	if(thisChildY == 0) {
	    if(colorMode == true){thisChild.setAttribute("fill", randomColor())};	    
	    if(colorMode == true){thisChild.setAttribute("stroke", randomColor())};
            if(thisChildDir == "NE"){thisChild.setAttribute("class", "SE")};
            if(thisChildDir == "NW"){thisChild.setAttribute("class", "SW")};
	}
	
	// code block that moves symbol based on direction    
	if(thisChildDir == "SE"){
            thisChild.setAttribute("cx", thisChildX + velocity);
            thisChild.setAttribute("cy", thisChildY + velocity);	    
	}
	if(thisChildDir == "SW"){
            thisChild.setAttribute("cx", thisChildX - velocity);
            thisChild.setAttribute("cy", thisChildY + velocity);	    
	}
	if(thisChildDir == "NE"){
            thisChild.setAttribute("cx", thisChildX + velocity);
            thisChild.setAttribute("cy", thisChildY - velocity);	    
	}
	if(thisChildDir == "NW"){
            thisChild.setAttribute("cx", thisChildX - velocity);
            thisChild.setAttribute("cy", thisChildY - velocity);	    
	}
	
    };
    id = window.requestAnimationFrame(dance);
};

var stop = function(){
    window.cancelAnimationFrame(id);
}

var randomColor = function(){
    return colorArray[Math.floor(Math.random() * colorArray.length)];
}
// var change = function(e){
//     e.target.setAttribute("fill", "cyan");
//     e.target.addEventListener("click", move);
// };

// var move = function(e){
//     randX = Math.floor(Math.random() * 501);
//     randY = Math.floor(Math.random() * 501);
//     e.target.setAttribute("cx", randX);
//     e.target.setAttribute("cy", randY);
//     e.target.setAttribute("fill", "blue");
//     e.target.removeEventListener("click", move);
//     e.target.addEventListener("click", change);
// };

clearButton.addEventListener("click", clear);
danceButton.addEventListener("click", dance);
extraButton.addEventListener("click", extra);
pic.addEventListener("click", plot)
