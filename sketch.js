let hand 
let cnv
function preload(){
  hand = loadImage("handsm.png")
}
function setup() {
  cnv = createCanvas(975, 900);
  let cx = floor((windowWidth - cnv.width) / 2);
  let cy = floor((windowHeight - cnv.height) / 2);
  cnv.position(cx, cy);

  background(0);
  stroke(162, 152, 140)//(207, 202, 208)//(149, 144, 114)//('#AEA294');  
  strokeWeight(36)
  translate(width / 2, height);
  angleMode(DEGREES);
  
  //hand.resize(50,0)
  imageMode(CENTER)
  //branch(300, 4,65);
  frameRate(35)
}


function draw(){
  //resetMatrix()
  translate(width / 2, height);
   background(0)
   branch(300, 5,frameCount%360);
}

function branch(len, d,theta) {
  // exit condition

  if (d == 0){
     image(hand,0,0,160,160)
     //ellipse(0,0,20,20)
    
    return;
  }

  // draw line
  line(0, 0, 0, -len);
  //recursive condition
  
    // first translate to end of line
  translate(0, -len);
 
  // srink len
  len *= 0.67;
  // decrement d
  d--;
  // rotate right
  
  push()
  rotate(theta);
 
  // call recursive loop
  branch(len, d, theta);
  pop()
  // rotate left
  push()
 
  rotate(-theta);
  branch(len,d, theta);
  pop()
  
}
