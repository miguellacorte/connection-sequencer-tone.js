
let img;
function preload() {
  img = loadImage('./tumblr_626b942b4687a563df69ce355610e66b_aaed3d79_1280.jpg');
}


document.querySelector('button')?.addEventListener('click', async () => {
  Tone.start()
  console.log('audio is ready')
})

 const synth = new Tone.Synth({ oscillator: { type: "square8" } }).toDestination();
 




function setup() {
 
  createCanvas(windowWidth, windowHeight);

  
        
 

}
    
  
// function mousePressed() {
//   loop();
  
//   //line
//   strokeWeight(4);
//   fill(230, 11, 07);
//   line(pmouseX - 3, pmouseY + 3, mouseX, mouseY);

//   //circle
//   strokeWeight(0);
//   fill(0);
  
//   circle(mouseX, mouseY, 29);

//   
// }


function draw() {
  background(255);
      
  
    
      console.log(mouseY)
      
// X1 Y0
      if ( (mouseX <= width/6 ) && (mouseY <= height/6 ) && (mouseX > 1) && (mouseY > 1) && (mouseIsPressed === true) ) {

        // image(img, 0, 0);

        function mousePressed() {
          noLoop();
        }
        
      fill(255,0,0);
      rect(0,0,width/6,height/6); 
      synth.triggerAttackRelease("C4", "8n");
      
     function mouseReleased() {
        loop();
      }

      

      
    }
      
      // console.log(mouseX)
      // console.log(width/6*2)
      
//   X2 YO
      if ( ((mouseX > width/6) && (mouseX < width/6* 2)) && (mouseY < height/6 ) ) {
        console.log(height/2)
        fill(35,0,0);
        rect(width/6,0,width/6,height/6); 
          
        }
      
//   X3 Y0
      if ( ((mouseX > width/6 * 2) && (mouseX < width/6* 3)) && (mouseY < height/6 ) ) {
        console.log(height/2)
        fill(35,0,0);
        rect(width/6 * 2,0,width/6,height/6); 
          
        }
      
//   X4 Y0
      if ( ((mouseX > width/6 * 3) && (mouseX < width/6* 4)) && (mouseY < height/6 ) ) {
        console.log(height/2)
        fill(35,0,0);
        rect(width/6 * 3,0,width/6,height/6); 
        
        }
      
//   X5 Y0
       if ( ((mouseX > width/6 * 4) && (mouseX < width/6* 5)) && (mouseY < height/6 ) ) {
        console.log(height/2)
        fill(35,0,0);
        rect(width/6 * 4,0,width/6,height/6); 
        
        }
      
//   X6 Y0
       if ( ((mouseX > width/6 * 5) && (mouseX < width/6* 6)) && (mouseY < height/6 ) ) {
        console.log(height/2)
        fill(35,0,0);
        rect(width/6 * 5,0,width/6,height/6); 
        
        }
      
//   X7 Y0
       if ( ((mouseX > width/6 * 5) && (mouseX < width/6* 7)) && (mouseY < height/6 ) ) {
        console.log(height/2)
        fill(35,0,0);
        rect(width/6 * 5,0,width/6,height/6); 
        
        }
      
      
      
      
      
      
        // else if ( (mouseX > width/3) && (mouseX < 2*width/3) ) {
        // fill(255,0,0);
        // rect(width/3,0,width/3,height);
        // }		else if ( (mouseX>2*width/3) && (mouseX < width)) {
        // fill(255,0,0);
        // rect(2*width/3,0,width/3,height);
        // }
    
    }
    
    function windowResized() {
      resizeCanvas(windowWidth, windowHeight);
    }