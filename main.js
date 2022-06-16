// const { Tone } = require("tone/build/esm/core/Tone");

// const { Sequence } = require("tone");

// let notes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

document.querySelector('button')?.addEventListener('click', async () => {
  // Tone.start()
  console.log('audio is ready')
})


let mouseCount = 0;




let synth = new Tone.Synth({ oscillator: { type: "square8" } }).toDestination();

 Tone.Master.volume.value = -15;

//  if there are more than 10 clicks > make reverb higher (select parameter)
// start with high ping pong and slowly reduce

let revWet = 0.3

 let reverb = new Tone.Reverb([1]).toDestination();
 reverb.wet.rampTo(revWet, 3);

 let chorus = new Tone.Chorus(20, 220, 1).toDestination();
//  chorus.wet.value = 1

let feedback = 0.8;
 let pingPong = new Tone.PingPongDelay("16n", feedback).toDestination();


 

synth.connect(chorus)
chorus.connect(pingPong)
pingPong.connect(reverb)
// delay.connect(reverb)




function mousePressed() {

  //circle
  loop();
  
  strokeWeight(0);
  fill(0);
  
  circle(mouseX, mouseY, 29);

  noLoop();

  let notes = [];


  // ROW 1

  // X1 Y1
if ( (mouseX <= width/4 ) && (mouseY <= height/4 ) && (mouseX > 1) && (mouseY > 1)) {
    notes.push("G4");
      console.log(notes) 
      
  }

  // X2 Y1
if ( (mouseX > width/4) && (mouseX < width/4* 2) && (mouseY < height/4 ) ) {
    // synth.triggerAttackRelease("D4", "8n");
    notes.push("A4"); 
    console.log(notes)
}

  // X3 Y1
if ( (mouseX > width/4* 2) && (mouseX < width/4* 3) && (mouseY < height/4 ) ) {
  // synth.triggerAttackRelease("D4", "8n");
  notes.push("Bb4");
  console.log(notes)
}

  // X4 Y1
if ( (mouseX > width/4* 3) && (mouseX < width/4* 4) && (mouseY < height/4 ) ) {
  // synth.triggerAttackRelease("D4", "8n");
  notes.push("C4");
  console.log(notes)
}

// ROW 2

  // X1 Y2
if ( (mouseX <= width/4 ) && (mouseY <= height/2 ) && (mouseY > height/4 ) && (mouseX > 1) && (mouseY > 1) ){
    notes.push("D3");
      console.log(notes) 
      
  }

  // X2 Y2
  if ( (mouseX > width/4  ) && (mouseX < width/4* 2) && (mouseY <= height/2 ) && (mouseY > height/4 ) && (mouseX > 1) && (mouseY > 1) ){
    notes.push("Bb3");
      console.log(notes) 
      
  }

  // X3 Y2
  if ( (mouseX > width/4* 2) && (mouseX < width/4* 3) && (mouseY <= height/2 ) && (mouseY > height/4 ) && (mouseX > 1) && (mouseY > 1) ){
    notes.push("F3");
      console.log(notes) 
      
  }

   // X4 Y2
   if ( (mouseX > width/4* 3) && (mouseX < width/4* 4) && (mouseY <= height/2 ) && (mouseY > height/4 ) && (mouseX > 1) && (mouseY > 1) ){
    notes.push("G3");
      console.log(notes) 
      
  }

// ROW 3

  // X1 Y3
if ( (mouseX <= width/4 ) && (mouseY > height/2 ) && (mouseY < height/2 + height/4) && (mouseX > 1) && (mouseY > 1)) {
  notes.push("A2");
    console.log(notes) 
    
}

// X2 Y3
if ( (mouseX > width/4) && (mouseX < width/4* 2) && (mouseY > height/2 ) && (mouseY < height/2 + height/4)  ) {
  // synth.triggerAttackRelease("D4", "8n");
  notes.push("F4");
  
  console.log(notes)
}

// X3 Y3
if ( (mouseX > width/4* 2) && (mouseX < width/4* 3) && (mouseY > height/2 ) && (mouseY < height/2 + height/4)   ) {
// synth.triggerAttackRelease("D4", "8n");
notes.push("C4");
console.log(notes)
}

// X4 Y3
if ( (mouseX > width/4* 3) && (mouseX < width/4* 4) && (mouseY > height/2 ) && (mouseY < height/2 + height/4) ) {
// synth.triggerAttackRelease("D4", "8n");
notes.push("D4");
console.log(notes)
}

// ROW 4

// X1 Y4
if ( (mouseX <= width/4 ) && (mouseY > height/2 + height/4)  && (mouseX > 1) && (mouseY > 1) ){
  notes.push("G3");
    console.log(notes) 
    
}

// X2 Y4
if ( (mouseX > width/4  ) && (mouseX < width/4* 2) && (mouseY > height/2 + height/4)  && (mouseX > 1) && (mouseY > 1) ){
  notes.push("A3");
    console.log(notes) 
    
}

// X3 Y4
if ( (mouseX > width/4* 2) && (mouseX < width/4* 3) && (mouseY > height/2 + height/4) && (mouseX > 1) && (mouseY > 1) ){
  notes.push("Bb3");
    console.log(notes) 
    
}

 // X4 Y4
 if ( (mouseX > width/4* 3) && (mouseX < width/4* 4) && (mouseY > height/2 + height/4)  && (mouseX > 1) && (mouseY > 1) ){
  notes.push("C3");
    console.log(notes) 
    
}


Tone.Transport.bpm.value = 30;

Tone.Transport.pause();
const seq = new Tone.Sequence((time, note) => {
  synth.triggerAttackRelease(note, 0.1, time);
  console.log(seq.state)
  
},notes, "4n").start();

Tone.Transport.start();

console.log(notes)


}






function draw() {

  if (mouseIsPressed === true) {
    mouseCount += 1
    console.log(mouseCount)
  }


//line

if (mouseCount > 1) {
strokeWeight(4);
fill(230, 11, 07);
line(pmouseX - 3, pmouseY + 3, mouseX, mouseY);   
}

if (mouseCount > 10) {

  revWet += 0.7
   
  }


}







    
function windowResized() {
      resizeCanvas(windowWidth, windowHeight);
    };