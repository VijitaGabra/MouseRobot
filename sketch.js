var x_val = 0;
var y_val = 200;
var n_height=100;
var a_val = 50;
var b_val = 250;
var m_height = 150;
function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background("black");
  x_val=x_val+(mouseX-x_val)* 0.04;
  a_val=a_val+(mouseX-a_val)* 0.05;
  y_val=y_val+(mouseY-y_val)* 0.04;
  b_val=b_val+(mouseY-b_val)* 0.05;
  fill("white");
  rect(x_val, y_val-(50+n_height), 50,50);
  fill("orange");
  rect(a_val, b_val-(50+m_height), 40,40);
  
  
  if(mouseIsPressed&&n_height===50) {
     n_height = 5;
  }
  if(!mouseIsPressed) {
    n_height = 50;
  }
  
  if(mouseIsPressed&&m_height===50) {
     m_height = 100
  }
  if(!mouseIsPressed) {
    m_height = 100;
  }
  
  /*stroke(255);
  strokeWeight(5);
  line(x_val+25, y_val-n_height, x_val+25, y_val);
  line(x_val-70,y_val+20, x_val-15, y_val+30);
  line(x_val+140,y_val+20, x_val+15, y_val+30);*/
  fill(random(200),random(50),random(100));
  rect(x_val-15, y_val,80,100);
  
 /*stroke(255);
  strokeWeight(5);
  line(a_val+25, b_val-m_height, a_val+25, b_val);
  line(a_val-70,b_val+20, a_val-15, b_val+30);
  line(a_val+140,b_val+20, a_val+15, b_val+30);*/
  fill(random(25),random(50),random(100));
  rect(a_val-15, b_val,80,100); 
}


   