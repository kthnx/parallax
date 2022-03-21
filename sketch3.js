//var img;
var opt = 5;
//why the fuck isn't this working

var bg, p1, p2, p3, p4;

var p1x, p1y, p1bx, p1by;
var p2x, p2y, p2bx, p2by;
var p3x, p3y, p3bx, p3by;
var p4x, p4y, p4bx, p4by;

function preload() {

  // bg = loadImage('assets/bg.png');
  // p1 = loadImage('assets/p1.png');
  // p2 = loadImage('assets/p2.png');
  // p3 = loadImage('assets/p3.png');
  // p4 = loadImage('assets/p4.png');
  //
  // p1b = loadImage('assets/p1.png');
  // p2b = loadImage('assets/p2.png');
  // p3b = loadImage('assets/p3.png');
  // p4b = loadImage('assets/p4.png');


}

function setup() {
  createCanvas(200,300);

  p1x = 0;
  p1y = 0;
  p2x = 0;
  p2y = 0;
  p3x = 0;
  p3y = 0;
  p4x = 0;
  p4y = 0;

  p1bx = 200;
  p1by = 0;
  p2bx = 200;
  p2by = 0;
  p3bx = 200;
  p3by = 0;
  p4bx = 200;
  p4by = 0;


  if (opt == 1) {
  bg = loadImage('assets/D bg.png');
  p1 = loadImage('assets/D p1.png');
  p2 = loadImage('assets/D p2.png');
  p3 = loadImage('assets/D p3.png');
  p4 = loadImage('assets/D p4.png');

  p1b = loadImage('assets/D p1.png');
  p2b = loadImage('assets/D p2.png');
  p3b = loadImage('assets/D p3.png');
  p4b = loadImage('assets/D p4.png');
}
else
 if (opt == 3){
  bg = loadImage('assets/F bg.png');
  p1 = loadImage('assets/F p1.png');
  p2 = loadImage('assets/F p2.png');
  p3 = loadImage('assets/F p3.png');
  p4 = loadImage('assets/F p4.png');

  p1b = loadImage('assets/F p1b.png');
  p2b = loadImage('assets/F p2b.png');
  p3b = loadImage('assets/F p3.png');
  p4b = loadImage('assets/F p4.png');
}
else
 if (opt == 5){
  bg = loadImage('assets/W bg.png');
  p1 = loadImage('assets/W p1.png');
  p2 = loadImage('assets/W p2.png');
  p3 = loadImage('assets/W p3.png');
  p4 = loadImage('assets/W p4.png');

  p1b = loadImage('assets/W p1.png');
  p2b = loadImage('assets/W p2.png');
  p3b = loadImage('assets/W p3.png');
  p4b = loadImage('assets/W p4.png');
};

}

function draw() {
   background('red');






   image(bg, 0,0);
   image(p4, p4x,p4y);
    image(p4b, p4bx,p4by);
   image(p3, p3x,p3y);
    image(p3b, p3bx,p3by);
   image(p2, p2x,p2y);
    image(p2b, p2bx,p2by);
   image(p1, p1x,p1y);
    image(p1b, p1bx,p1by);






   p1x = p1x -10;
   p2x = p2x -5;
   p3x = p3x -2;
   p4x --;

   p1bx = p1bx -10;
   p2bx = p2bx -5;
   p3bx = p3bx -2;
   p4bx --;

    if (p4x < -199) {
      p4x = 200;
    };
    if (p4bx < -199) {
      p4bx = 200;
    };

    if (p3x < -199) {
      p3x = 200;
    };
    if (p3bx < -199) {
      p3bx = 200;
    };

    if (p2x < -199) {
      p2x = 200;
    };
    if (p2bx < -199) {
      p2bx = 200;
    };

    if (p1x < -199) {
      p1x = 200;
    };
    if (p1bx < -199) {
      p1bx = 200;
    };




if (mouseX > 0 && mouseX < 20 && mouseY > 0 && mouseY < 30) {
  noStroke();
  fill(255, 140);
  rect(0,0,20,30);
};

};




function mousePressed() {
  // if (mouseX > 0 && mouseX < 20 && mouseY > 0 && mouseY < 30) {
    opt = 5;
  // };
};
