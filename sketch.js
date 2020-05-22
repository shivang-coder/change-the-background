
var r = 0;
var g = 50;
var b=255;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);
}


function draw(){

  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis
r = map(mouseX,0,1200,0,255);
g= map(mouseX,0,1200,100,50);
b = map(mouseX,0,1200,255,0);
  // Use the map() function to do so. 
background(r,g,b);
fill("white");
  // Pass the values to the background() function you have learnt previously.
ellipse(mouseX,196,25,25);
  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
}