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

// function setup() {
//   createCanvas(windowWidth, windowHeight, WEBGL);
//   background('#EAEAEA');
// }

// function draw() {
//   stroke('#FFFFFF')
//   y = 10 * sin(TWO_PI * frameCount * 0.01 / 360)
//   for (i=-windowWidth;i < windowWidth; i++){
//     x1 = i / 360
//     x2 = (i + 1) / 360
//     y1 = 100 * sin(TWO_PI * x1 * 0.3) + i * 0.1 /
//       + y
//     y2 = 100 * sin(TWO_PI * x2 * 0.3) + (i + 1) * 0.1 /
//       + y
//     line(i, y1, i + 1, y2)
//   }
// }
