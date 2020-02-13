var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var radius = 20;
var increasing = 0; //0 if increasing, 1 if decreasing
var state = 0; //0 if stopped, 1 if running
var id;
var dvdImage = document.getElementById("dvd-image");

var animateFunction = function() {
  //console.log("animate called");
  if (!state) {
    state = 1;
    render_frame();
  }
  //window.requestAnimationFrame(animateFunction);
}

var render_frame = function() {
  id = window.requestAnimationFrame(render_frame);
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.beginPath();
  ctx.fillStyle = '#FF0000';
  ctx.arc(300, 300, radius, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
  if (increasing) {
    radius -= 1;
  } else {
    radius += 1;
  }
  if (radius < 20) {
    increasing = 0;
  } else if (radius > 200) {
    increasing = 1;
  }
}

var stopFunction = function() {
  state = 0;
  window.cancelAnimationFrame(id);
}

var dvdX = 100;
var dvdY = 100;

var dvdAnimate = function() {
    // if (!state) {
    // 	state = 1;
    randomizeDVD();
    dvdFunction();
    // }
}
var dvdFunction = function() {
    id = window.requestAnimationFrame(dvdFunction)
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.drawImage(dvdImage,dvdX,dvdY,100,70);
    console.log("(" + dvdX + ", " + dvdY + ")");
    dvdX += 1;
    dvdY += 1;
}


var animate = document.getElementById("animate");
animate.addEventListener("click", animateFunction);

var stop = document.getElementById("stop");
stop.addEventListener("click", stopFunction);

var dvd = document.getElementById("dvd-button");
dvd.addEventListener("click", dvdAnimate);

// Helper Function
var randomizeDVD = function() {
    dvdX = Math.floor(Math.random() * 400);
    dvdY = Math.floor(Math.random() * 400);
}

// DVD speeds up
// Doesnt bounce
