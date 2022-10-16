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
// let color = 0;

// function setup() {
//   createCanvas(windowWidth, 400, WEBGL);
//   background(234,234,234);
// }

// function draw() {
//   setBackground(color)
//   stroke('#FFFFFF')
//   noFill();
//   renderCurve1(offset)
//   renderCurve2(offset)
//   renderCurve3(offset)
//   offset += 0.05;
//   color += 0.01;
// }

// function renderCurve1(offset){
//   beginShape();
//   vertex(0, height);
//   for(let x = -windowWidth; x < windowWidth; x++){
//     let y = calcCurve1(offset, x)
//     vertex(x, y);
//   }
//   vertex(width, height);
//   endShape();
// }

// function calcCurve1(offset, x){
//   let angle = offset + x * 0.01;
//   let y = 0.3 * (- 0.05 * x) * sin(0.1 * angle) + 0.1 * x * cos(0.5 * angle) + 0.1 * x
//   return y
// }

// function renderCurve2(offset){
//   beginShape();
//   vertex(0, height);
//   for(let x = -windowWidth; x < windowWidth; x++){
//     let y = calcCurve2(offset, x)
//     vertex(x, y);
//   }
//   vertex(width, height);
//   endShape();
// }

// function calcCurve2(offset, x){
//   let angle = offset + x * 0.01;
//   let y = 0.3 * (- 0.05 * x) * sin(0.1 * angle + PI) + 0.05 * x * cos(0.5 * angle + PI) + 0.2 * (x + 10)
//   return y + 2
// }

// function renderCurve3(offset){
//   beginShape();
//   vertex(0, height);
//   for(let x = -windowWidth; x < windowWidth; x++){
//     let y = calcCurve3(offset, x)
//     vertex(x, y);
//   }
//   vertex(width, height);
//   endShape();
// }

// function calcCurve3(offset, x){
//   let angle = offset + x * 0.01;
//   let y = 0.1 * (- 0.05 * (x - 1) ) * sin(0.1 * angle + PI) + 0.2 * cos(0.5 * angle) + 0.2 * x - 1
//   return y
// }

// function setBackground(color){
//   dr = 2.5 * sin(0.1 * color)
//   db = 2.5 * sin(0.1 * (color + PI))
//   background(234 + dr, 234, 234 + db);
// }
