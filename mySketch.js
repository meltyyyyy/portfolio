
let song;
let song2 = "aishii x dxsbond - antirealign.mp3"
//let song1 = "Kryo Ancestry(2).mp3"
let fft; 
let amp;
let col = 0;
let particles = []
var bubbles = [];
var targetx;
var targety;
var rotx = 0.0;
var roty = 0.0;
var purple = 10
var purple2 = 10
var green2 = 100
var yellow2 = 10
var red2 = 10
let tiny = 0;
let timer = 26;
let whichSong;
/*
const songs = {

song1, 
	song2

}*/


function preload() {
//music made by me :D
//whichSong = int(random(songs.length)) 
  //var song = songs[whichSong]
  //soundFormats('mp3', 'ogg');
	song = loadSound("aishii x dxsbond - antirealign.mp3");
  //song = loadSound('aishii x dxsbond - antirealign.mp3');
//song2 = loadSound('aishii x dxsbond - antirealign.mp3');

}

function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
angleMode(DEGREES);  
fft = new p5.FFT();
orbitControl();


}

function draw() {
  background(255);
  purple2 = 255;
  purple = 255;
  yellow2 = 25
    green2 = 70

   
 if(tiny < 5){
tiny = frameCount % 60;


 }




  colorMode(HSB);
  //colorMode (RGB, 256);
  //box(2000);
	specularMaterial(255);
  ambientLight(0, 0, 0);
  {pointLight (0, 0, 0, 200.0, 90.0, 200.0);
    pointLight (0, red2, 0, -200.0, 0.0, -200.0);
  	pointLight (purple2, 90, yellow2, 0.0, 200.0, 200.0);
  	pointLight (purple2, 0, 50, 0.0, -200.0, -200.0);
  	pointLight (green2, red2, yellow2, 200.0, 0.0, 200.0);
  	pointLight (green2, 0, 0, -200.0, 0.0, -200.0);
  pointLight (red2, 100, yellow2, 0.0, 200.0, 200.0);
  	pointLight (0, 100, green2, 0.0, -200.0, -200.0);}
 
  targetx = mouseY;
  targety = mouseX;
  rotx += (targetx - rotx) * 0.04;
  roty += (targety - roty) * 0.04;

  bubbles.push (new BubblesBase (random (width), height + 40.0, random (-1000.0, 1000.0), random (5,0), random (0.1, 5.0)));
	for (var i = 30; i < bubbles.length-90; i++) {
		bubbles[i].update ();
		bubbles[i].render ();
		if (bubbles[i].by < 0) {
			bubbles.splice (i, 1);
		}
	}
  
  


  
  rotateX(60);
  
  fft.analyze();
  amp = fft.getEnergy(20,200);
  var wave = fft.waveform();


strokeWeight(1); 
for(let i = 0; i < 20; i++) {



var r = map(sin(frameCount), -1, 1, 0, 255);
var g = map(i, 0, 20, 0,255 );
var b = map(cos(frameCount), -1, 1, 255, 0);
//var r = sin(frameCount) * 250;
//var g = sin(frameCount % 60) * 250;
//var b = sin(frameCount % 90) * 40;

//stroke(255);
//stroke(r,g,b);

rotate(frameCount / 100);

  beginShape();
for(var j = 0; j < 360; j+= 60) {
var rad = i*8;

var x = rad * cos(j) * rod;
var y = rad * -sin(j) * rod;
var z = sin(frameCount * 5 + i * 5) * 60;
//vertex(x,y,z);

}
  endShape(CLOSE);


} 
 for(let i = 0; i < 17; i++) {


  var r = map(sin(frameCount), -1, 1, 0, 255);
  var g = map(i, 0, 20, 0,255 );
  var b = map(cos(frameCount), -1, 1, 255, 0);
  rotateX (rotx * 0.01);
  rotateY (roty * 0.01);
  //rotate(60);

  beginShape();
for(var j2 = 0; j2 < 360; j2+= 60) {
var rad2 = i*0.08;
let index = floor(map(i,0,180,0,wave.length - 1))
var rod = map(wave[index], -1, 1, 15, 350);
var x2 = rad2 * sin(j2) * rod;
var y2 = rad2 * -tan(j2) * rod;
var z2 = sin(frameCount * 4 + i * 2) * 60;
noFill();
vertex(x2,y2,z2);
//stroke(rod,rod,rod);
}
  endShape(CLOSE);
  
}

}



function BubblesBase (x, y, z, r, up) {
  bonk = up;
        if (song.isPlaying()) {

          
      if (keyCode == SHIFT == true) {
     
     bonk = up - 2;
     
   } else {
     bonk = up;
   }
      if (keyCode == ALT == true) {
     
     //bonk = up / 2;
     
   }
    
  }
  
    
    var bonk = up;
    this.bx = x;
    this.by = y;
    this.br = r;
    this.bz = z;
    var r = map(sin(frameCount), -1, 1, 0, 255);
    var g = map(40, 0, 20, 0,255 );
    var b = map(cos(frameCount), -1, 1, 255, 0);
    this.update = function () {
      this.by -= bonk;
      
      
    }
    
    this.render = function ()
    {
  

      push();
      strokeWeight(0.5);
      translate (this.bx - width / 2.0, this.by - height / 2.0, this.bz);
  
    box(this.br * 3.4); 
          translate(this.bx - width / 3.0, this.by - height / 3.0, this.bz);
      sphere(this.br * 3.4 );
         //translate(this.bx - width / 3.0, this.by - height / 2.0, this.bz);
      //plane(this.br * 6.0);
      pop();
      
    }  

}



function mouseClicked() {

  if(song.isPlaying()) {
  
    song.pause() 
  
  } else {
    if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
      timer --;
    }


 if(timer == 0){
  tiny = 350;
  /*
  if (frameCount % 60 == 5 && tiny < 5) { 
    tiny --;
  }
*/

 }   
  song.play()
  //song.pause()
  
  }

}
