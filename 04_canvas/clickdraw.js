//retrieve node in DOM via ID
var c = document.getElementById("slate")

//instantiate a Canvas Rendering 2D object
var ctx = c.getContext("2d")

//invoke interface methods
ctx.fillStyle="#ff0000" //red
//ctx.fillRect(50,50,100,200)
var can = c.getBoundingClientRect();
var shape = "rect";

var clear = function(){
    var width = c.width;
    var height = c.height;
    ctx.clearRect(0,0,width,height);
}

var createRect = function(){
    var x = event.clientX - can.left;
    var y = event.clientY - can.top;
    ctx.fillRect(x , y, 50, 50);
    //console.log(x,y);
}

var createdot = function(){
    var x = event.clientX - can.left;
    var y = event.clientY - can.top;
    ctx.beginPath();
    ctx.arc(x , y, 25,0,2* Math.PI);
    ctx.fill();
    //console.log(x,y);
}


var t = document.getElementById("toggle")
c.addEventListener("click", function(){
    if (t.checked){
        console.log(t.checked);
        c.addEventListener("click",createdot());
    }else{
        c.addEventListener("click",createRect());
    }
})

var clearing = document.getElementById("clear");
clearing.addEventListener("click",clear);
