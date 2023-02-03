import "./globals";
import "p5/lib/addons/p5.sound";
import p5 from "p5";

const rhombus = (p: p5) => {
  let song: p5.SoundFile;
  let fft: p5.FFT;
  const bubbles: BubblesBase[] = [];
  let rotx = 0.0;
  let roty = 0.0;
  let tiny = 0;
  let timer = 26;

  p.preload = () => {
    song = p.loadSound(`/music.mp3`);
  };
  p.setup = () => {
    const canvas = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    canvas.position(0, 0);
    canvas.style("z-index", "-1");
    p.angleMode(p.DEGREES);
    fft = new p5.FFT();
    p.orbitControl();
  };
  p.draw = () => {
    p.background(255);
    const purple = 255;
    const yellow = 25;
    const green = 70;

    if (tiny < 5) {
      tiny = p.frameCount % 60;
    }

    p.colorMode(p.HSB);
    p.specularMaterial(255);
    p.ambientLight(0, 0, 0);
    {
      p.pointLight(0, 0, 0, 200.0, 90.0, 200.0);
      p.pointLight(0, 10, 0, -200.0, 0.0, -200.0);
      p.pointLight(purple, 90, yellow, 0.0, 200.0, 200.0);
      p.pointLight(purple, 0, 50, 0.0, -200.0, -200.0);
      p.pointLight(green, 10, yellow, 200.0, 0.0, 200.0);
      p.pointLight(green, 0, 0, -200.0, 0.0, -200.0);
      p.pointLight(10, 100, yellow, 0.0, 200.0, 200.0);
      p.pointLight(0, 100, green, 0.0, -200.0, -200.0);
    }

    const targetx = p.mouseY;
    const targety = p.mouseX;
    rotx += (targetx - rotx) * 0.04;
    roty += (targety - roty) * 0.04;

    bubbles.push(
      new BubblesBase(
        p.random(p.width),
        p.height + 40.0,
        p.random(-1000.0, 1000.0),
        p.random(5, 0),
        p.random(0.1, 5.0)
      )
    );
    for (let i = 30; i < bubbles.length - 90; i++) {
      bubbles[i].update();
      bubbles[i].render();
      if (bubbles[i].by < 0) {
        bubbles.splice(i, 1);
      }
    }

    p.rotateX(60);

    fft.analyze();
    const wave = fft.waveform();

    p.strokeWeight(1);
    for (let i = 0; i < 17; i++) {
      p.rotateX(rotx * 0.01);
      p.rotateY(roty * 0.01);

      p.beginShape();
      for (let j = 0; j < 360; j += 60) {
        const rad = i * 0.08;
        const index = p.floor(p.map(i, 0, 180, 0, wave.length - 1));
        const rod = p.map(wave[index], -1, 1, 15, 350);
        p.noFill();
        p.vertex(
          rad * p.sin(j) * rod,
          rad * -p.tan(j) * rod,
          p.sin(p.frameCount * 4 + i * 2) * 60
        );
      }
      p.endShape(p.CLOSE);
    }
  };
  p.mouseClicked = () => {
    p.userStartAudio();
    if (song.isPlaying()) {
      song.pause();
    } else {
      if (p.frameCount % 60 == 0 && timer > 0) {
        timer--;
      }
      if (timer == 0) {
        tiny = 350;
      }
      song.play();
    }
  };

  class BubblesBase {
    bonk: number;
    bx: number;
    by: number;
    br: number;
    bz: number;

    constructor(x: number, y: number, z: number, r: number, up: number) {
      this.bonk = up;
      if (song.isPlaying()) {
        if ((p.keyCode == p.SHIFT) == true) {
          this.bonk = up - 2;
        } else {
          this.bonk = up;
        }
        if ((p.keyCode == p.ALT) == true) {
          //bonk = up / 2;
        }
      }

      this.bonk = up;
      this.bx = x;
      this.by = y;
      this.br = r;
      this.bz = z;
    }

    update = function (this: BubblesBase) {
      this.by -= this.bonk;
    };

    render = function (this: BubblesBase) {
      p.push();
      p.strokeWeight(0.5);
      p.translate(this.bx - p.width / 2.0, this.by - p.height / 2.0, this.bz);
      p.box(this.br * 3.4);
      p.translate(this.bx - p.width / 3.0, this.by - p.height / 3.0, this.bz);
      p.sphere(this.br * 3.4);
      p.pop();
    };
  }
};

export default rhombus;
