// Jionghao Wu, Joseph Yusufov
// SoftDev Pd. 2
// K #06: Dot Dot Dot
// 2020-02-12

//retrieve node in DOM via ID
var c = document.getElementById("slate")

//instantiate a Canvas Rendering 2D object
var ctx = c.getContext("2d")

//invoke interface methods
ctx.fillStyle="#ff0000" //red
//ctx.fillRect(50,50,100,200)
var can = c.getBoundingClientRect();
var shape = "rect";
var lastX = 0;
var lastY = 0;

var clear = function(){
    var width = c.width;
    var height = c.height;
    ctx.clearRect(0,0,width,height);
    lastX = 0;
    lastY = 0;
}

var createdot = function(){
    var x = event.clientX - can.left;
    var y = event.clientY - can.top;

    // drawing the circle
    ctx.beginPath();
    ctx.arc(x , y, 7,0,2* Math.PI);
    ctx.fill();
    console.log("circle drawn");
    
    if((lastX == 0) && (lastY == 0)) {

    } else {
        // connecting the last circle and this circle together
        ctx.beginPath();    
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.stroke();
    }
    // updating last variables
    console.log("Before: (" + lastX + " , " + lastY + ")");  
    lastX = x;
    lastY = y;
    console.log("After: (" + lastX + " , " + lastY + ")");
}


c.addEventListener("click", function(){
    c.addEventListener("click",createdot());
})

var clearing = document.getElementById("clear");
clearing.addEventListener("click",clear);
