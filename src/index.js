
// these are the variables you can use as inputs to your algorithms
console.log(fxhash)   // the 64 chars hex number fed to your algorithm
console.log(fxrand()) // deterministic PRNG function, use it instead of Math.random()

function getRandom(min=0, max=1) {
  return (fxrand() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

window.requestAnimationFrame(draw); //ANIMATE

// CANVAS SIZE IS INDEPENDENT
var canvas = document.getElementById("myCanvas");
let w = 500
let h = 700
let wh = w/h
let windowW = window.innerWidth
let windowH = window.innerHeight
let whWin = windowW / windowH
let wW
let wH
canvas.width = w
canvas.height = h
let offset = 1 - 0.1
if(wh<whWin){
  wH = windowH * offset
  wW = wH * wh
}
else{
  wW = windowW * offset
  wH = wW / wh
}

// RESIZE TO FIT IN WINDOW
canvas.style.width = String(parseInt(wW)) + "px"
canvas.style.height = String(parseInt(wH)) + "px"


var ctx = canvas.getContext("2d"); //Drawing Element
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 150, 75);

ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();



let rnx = () => {return getRandom(0,w)}
let rny = () => {return getRandom(0,h)}


 function draw(){

  for (let i = 0; i < 10000; i++) {
    let x = rnx()
    let y = rny()
    // Stroked triangle
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 2, y + 2);
    ctx.lineWidth = 0.1;
    ctx.stroke();
  }

   window.requestAnimationFrame(draw);

 }


//// SAVE
let canvasUrl = canvas.toDataURL();
const createEl = document.createElement('a');
createEl.href = canvasUrl;

// const container = document.createElement("div")
// container.innerText = `
//   random hash: ${fxhash}\n
//   some pseudo random values: [ ${fxrand()}, ${fxrand()}, ${fxrand()}, ${fxrand()}, ${fxrand()},... ]\n
// `
// document.body.prepend(container)