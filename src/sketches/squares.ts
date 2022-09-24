import p5 from "p5";

const squares = (p: p5) => {
  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight, p.WEBGL);
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
