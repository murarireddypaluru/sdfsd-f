
function setup() {
  createCanvas(1000,1000);
  angleMode(DEGREES)
}

function draw() {
  background("blue");
  translate(200, 200)
  rotate(-90)
  let hr = hour()
  let mn = minute()
  let sc = second()
  strokeWeight(8)
  stroke(255, 100, 150)
  noFill()
  let end1 = map(sc, 0, 60, 0, 360)
  arc(200, 200, 250, 250, 0, end1)
  let end2 = map(mn, 0, 60, 0, 360)
  arc(200, 200, 230, 230, 0, end2)
  let end3 = map(hr % 12, 0, 12, 0, 360)
  arc(200, 200, 210, 210, 0, end3)
  drawSprites();
}
