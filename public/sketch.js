// function preload() {
//     IMG = loadImage('img.jpg');
// }

let img 

function setup () {
    setupC()
}

let imgLoaded = 0

function draw () {
    /// LOAD THE IMAGE
    if(imgLoaded == 0 && IMG != undefined){
        loadImage(IMG, img => {
            image(img, 0, H * S * .15, W * S, H * S * 0.5);
          });
          imgLoaded ++
    }
    if(imgLoaded == 1){
        //console.log(getRandom())
        drawPalette()
        drawColorList()

        //// DRAW THE HOVER COLOR
        let clickColor = get(mouseX, mouseY)
        fill(clickColor)
        stroke(0)
        strokeWeight(1)
        rect(W * S * .89, H * S * 0.105, W * S * .1, H * S * 0.043)

    }

}