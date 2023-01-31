import "./globals";
import "p5/lib/addons/p5.sound";
import p5 from "p5";

const rhombus = (p: p5) => {
  let song: p5.SoundFile;
  let fft: p5.FFT;

  let bubbles: BubblesBase[] = [];

  var targetx;
  var targety;
  let rotx = 0.0;
  let roty = 0.0;
  let tiny = 0;
  let rod = 0.0;

  var purple = 10;
  let purple2 = 10;
  let green2 = 100;
  let yellow2 = 10;
  let red2 = 10;

  let amp;
  let timer = 26;

  p.preload = () => {
    song = p.loadSound("aishii x dxsbond - antirealign.mp3");
  };
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    p.angleMode(p.DEGREES);
    fft = new p5.FFT();
    p.orbitControl();
  };
  p.draw = () => {
    p.background(255);
    purple2 = 255;
    purple = 255;
    yellow2 = 25;
    green2 = 70;

    if (tiny < 5) {
      tiny = p.frameCount % 60;
    }

    p.colorMode(p.HSB);
    p.specularMaterial(255);
    p.ambientLight(0, 0, 0);
    {
      p.pointLight(0, 0, 0, 200.0, 90.0, 200.0);
      p.pointLight(0, red2, 0, -200.0, 0.0, -200.0);
      p.pointLight(purple2, 90, yellow2, 0.0, 200.0, 200.0);
      p.pointLight(purple2, 0, 50, 0.0, -200.0, -200.0);
      p.pointLight(green2, red2, yellow2, 200.0, 0.0, 200.0);
      p.pointLight(green2, 0, 0, -200.0, 0.0, -200.0);
      p.pointLight(red2, 100, yellow2, 0.0, 200.0, 200.0);
      p.pointLight(0, 100, green2, 0.0, -200.0, -200.0);
    }

    targetx = p.mouseY;
    targety = p.mouseX;
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
    for (var i = 30; i < bubbles.length - 90; i++) {
      bubbles[i].update();
      bubbles[i].render();
      if (bubbles[i].by < 0) {
        bubbles.splice(i, 1);
      }
    }

    p.rotateX(60);

    fft.analyze();
    amp = fft.getEnergy(20, 200);
    let wave = fft.waveform();

    p.strokeWeight(1);

    for (let i = 0; i < 20; i++) {
      var r = p.map(p.sin(p.frameCount), -1, 1, 0, 255);
      var g = p.map(i, 0, 20, 0, 255);
      var b = p.map(p.cos(p.frameCount), -1, 1, 255, 0);

      p.rotate(p.frameCount / 100);

      p.beginShape();
      for (var j = 0; j < 360; j += 60) {
        var rad = i * 8;

        var x = rad * p.cos(j) * rod;
        var y = rad * -p.sin(j) * rod;
        var z = p.sin(p.frameCount * 5 + i * 5) * 60;
        //vertex(x,y,z);
      }
      p.endShape(p.CLOSE);
    }

    for (let i = 0; i < 17; i++) {
      var r = p.map(p.sin(p.frameCount), -1, 1, 0, 255);
      var g = p.map(i, 0, 20, 0, 255);
      var b = p.map(p.cos(p.frameCount), -1, 1, 255, 0);
      p.rotateX(rotx * 0.01);
      p.rotateY(roty * 0.01);

      p.beginShape();
      for (var j2 = 0; j2 < 360; j2 += 60) {
        var rad2 = i * 0.08;
        let index = p.floor(p.map(i, 0, 180, 0, wave.length - 1));
        rod = p.map(wave[index], -1, 1, 15, 350);
        var x2 = rad2 * p.sin(j2) * rod;
        var y2 = rad2 * -p.tan(j2) * rod;
        var z2 = p.sin(p.frameCount * 4 + i * 2) * 60;
        p.noFill();
        p.vertex(x2, y2, z2);
      }
      p.endShape(p.CLOSE);
    }
  };
  p.mouseClicked = () => {
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
      var r = p.map(p.sin(p.frameCount), -1, 1, 0, 255);
      var g = p.map(40, 0, 20, 0, 255);
      var b = p.map(p.cos(p.frameCount), -1, 1, 255, 0);
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
