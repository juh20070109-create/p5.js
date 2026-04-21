function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(220);
  
  fill(255, 224, 200);
  ellipse(80, 280, 40, 80);
  ellipse(320, 280, 40, 80);
  
  fill(255, 224, 200);
  ellipse(200, 280, 220, 260);
   
  fill(30);
  arc(120, 210, 80, 100, radians(120), radians(-60));
  arc(280, 210, 80, 100, radians(120), radians(60));
  arc(150, 190, 80, 100, radians(120), radians(-60));
  arc(250, 190, 80, 100, radians(120), radians(60));
  arc(200, 260, 220, 230, radians(180), radians(0));
  rect(140, 141, 120, 100);
  triangle(95, 170, 180, 160, 140, 140);
  triangle(305, 170, 220, 160, 260, 140);
  
  fill(255, 224, 200);
  triangle(190, 250, 200, 300, 170, 290);
  triangle(210, 250, 200, 300, 230, 290);
  
  noFill();
  stroke(0);
  strokeWeight(3);
  arc(150, 290, 50, 30, radians(180), radians(0));
  arc(250, 290, 50, 30, radians(180), radians(0));
  strokeWeight(0);
  
  fill(240, 200, 180);
  ellipse(200, 310, 20, 30); 
  fill(255, 224, 200);
  ellipse(195, 305, 20, 30);
  
  fill(200, 100, 100);
  arc(200, 355, 60, 40, 0, PI);
  fill(255, 180, 180);
  arc(200, 355, 40, 25, 0, PI);
  
  fill(255, 200, 200, 80);
  ellipse(140, 320, 40, 20);
  ellipse(260, 320, 40, 20);
  
  fill(255, 224, 200);
  rect(170, 380, 60, 70);

  fill(240, 200, 180);
  ellipse(80, 280, 20, 40);
  ellipse(320, 280, 20, 40);
  
  fill(80, 80, 80, 80);
  ellipse(150, 200, 60, 40);
 
  if (!(keyIsPressed)) {
    if (keyCode === ENTER) {
      noFill();
      stroke(50);
      strokeWeight(4);
  
      ellipse(1500, 290, 70, 70);
      ellipse(2500, 290, 70, 70);
  
      line(1850, 290, 215, 290);
  
      line(1150, 290, 90, 250);
      line(2850, 290, 310, 250);
  
      strokeWeight(0);
    } 
    else {
      noFill();
      stroke(50);
      strokeWeight(4);
  
      ellipse(150, 290, 70, 70);
      ellipse(250, 290, 70, 70);
  
      line(185, 290, 215, 290);
  
      line(115, 290, 90, 250);
      line(285, 290, 310, 250);
  
      strokeWeight(0);
    }
  }
}

  if (mouseIsPressed)
    {
        fill(500);
        triangle(40, 460, 80, 460, 80, 450);
        triangle(360, 460, 320, 460, 320, 450);
        rect(40, 460, 80, 150);
        rect(280, 460, 80, 150);
  
        fill(40, 60, 120);
        rect(80, 450, 240, 160);
  
        fill(500);
        triangle(200, 450, 200, 600, 230, 450);
        triangle(200, 450, 200, 600, 170, 450);
  
        fill(40, 60, 120);
        triangle(230, 430, 230, 600, 250, 450);
        triangle(170, 430, 170, 600, 150, 450);

       fill(255); 
       rect(190, 450, 20, 160);
       fill(255, 224, 200);
       arc(200, 450, 60, 40, radians(0), radians(180));
       
       fill(500);
       textAlign(CENTER, CENTER);
       textSize(80);
       textStyle(BOLD);
       text("S", 270, 530);
    } 
  else
    {
        fill(500);
    triangle(40, 460, 80, 460, 80, 450);
    triangle(360, 460, 320, 460, 320, 450);
    rect(40, 460, 80, 150);
    rect(280, 460, 80, 150);
  
    fill(40, 60, 120);
    rect(80, 450, 240, 160);
  
    fill(500);
    triangle(200, 450, 200, 600, 230, 450);
    triangle(200, 450, 200, 600, 170, 450);
  
    fill(40, 60, 120);
    triangle(230, 430, 230, 600, 250, 450);
    triangle(170, 430, 170, 600, 150, 450);

    fill(255);
    rect(190, 450, 20, 160);
    fill(255, 224, 200);
    arc(200, 450, 60, 40, radians(0), radians(180));
  
    fill(500);
    textAlign(CENTER, CENTER);
    textSize(80);
    textStyle(BOLD);
    text("S", 270, 530);
  }
  
