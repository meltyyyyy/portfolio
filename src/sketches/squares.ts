import p5 from "p5";

const squares = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
  };
  p.draw = () => {
    p.background("#EAEAEA")
    for (let y = 0; y <= 1000; y = y + 500) {
        for (let x = 0; x <= 1000; x = x + 500) {
          p.noFill();
          p.stroke(255, 147, 206);
          p.rotateX(p.frameCount * 0.01);
          p.rotateY(p.frameCount * 0.01);
          p.box(200, 200, 200);
        }
      }
  };
};

export default squares;

// var offset = 0;

// function setup() {
//   createCanvas(windowWidth, 400, WEBGL);
//   background('#EAEAEA');
// }

// function draw() {
//   background('#EAEAEA');
//   stroke('#FFFFFF')
//   noFill();
//   renderCurve(offset)
//   offset += 0.05;
// }

// function renderCurve(offset){
//   beginShape();
//   vertex(0, height);
//   for(let x = -windowWidth; x < windowWidth; x++){
//     let y = calcCurve(offset, x)
//     vertex(x, y);
//   }
//   vertex(width, height);
//   endShape();
// }

// function calcCurve(offset, x){
//   let angle = offset + x * 0.01;
//   let y = 0.3 * (- 0.05 * x) * sin(0.1 * angle) + 0.1 * x * cos(0.5 * angle) + 0.1 * x
//   return y
// }
