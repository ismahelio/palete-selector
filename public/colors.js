


function drawColors(){
        //DRAW THE COLORS
        let nDiv = CS.length
        let barW = (W / nDiv) * S
        /// Iterate all the colors of the palette
        for (let i = 0; i < nDiv; i++) {
          let x = barW * i
          let c = CS[i]
          stroke(255)
          fill(c)
          rect(x, H * .15 * S, barW, H * S * 0.5)
        }
  }



function mouseClicked() {


    //Check if clicking the selection or the palette
    if(mouseY < H * .1 * S){
        console.log("palette sel")
        //Remove the color from the selection if we click on it
        let nDiv = PCS.length
        let barW = (W / nDiv) * S
        /// Iterate all the colors of the palette
        for (let i = 0; i < nDiv; i++) {
        let x = barW * i
        if(mouseX > x && mouseX < x + barW){
            PCS.splice(i, 1)
            updateList()
            break
        }
        
        }
    }
    else if(mouseY > H * .15 * S && mouseY < H * .65 * S){
        console.log("all colors")
        /// Check wich color I am clicking
        ////I
        let clickColor = get(mouseX, mouseY)

        if(clickColor != undefined){
            //ADD THE COLOR TO THE PALETTE IF NOT IN THE PCS LIST
            //Remove the alpha
            clickColor.splice(3, 1)
            if(!listInList(PCS, clickColor)){
                PCS.push(clickColor)
                updateList()
            }
        }   
    }
    
 

  
  
  }

// THE COLORS WE SELECT
function drawPalette(){
    fill([255,255,255])
    stroke(255)
    strokeWeight(4)
    rect(0, 0, W * S, H * S * .1)

    //SORT COLORS BY DARK
    let grays = []
    PCS.map(c => {
        let g = (0.2126*c[0]) + (0.7152 * c[1]) + (0.0722 * c[2])
        grays.push(g)
    })
    PCS = sortBy(PCS, grays)

    // DRAW THE COLORS IN THE PALETTE
    let nDiv = PCS.length
    let barW = (W / nDiv) * S
    /// Iterate all the colors of the palette
    for (let i = 0; i < nDiv; i++) {
      let x = barW * i
      let c = PCS[i]
      fill(c)
      rect(x, 0, barW, H * .1 * S)
      
    }
}

// MAKE THE LIST VISIBLE TO COPY IT
function drawColorList(){
    fill(0);
    strokeWeight(0)
    textSize(W * S * .03);
    text('PALETE MAKER: select your colors', 0, H * S * .135);

    // UPDATE THE TEXT

}

function equalList(l1, l2){
    if(l1.length == l2.length){
        for (let i = 0; i < l1.length; i++) {
            if(l1[i] != l2[i]){
                return false
            }
            
        }
        return true
    }
    else{
        return false
    }
}

function listInList(mainList, miniList){
    for (let i = 0; i < mainList.length; i++) {

        if(equalList(mainList[i], miniList)){
            return true
        }
    }
    return false
}

function updateList(){
    //lIST TO STRING
    document.getElementById('color_list').innerHTML = JSON.stringify(PCS);

}
  

  
  
